import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { GridFSBucket, ObjectId } from 'mongodb';

@Injectable()
export class UploadService {
  private gridFSBucket: GridFSBucket;

  constructor(@InjectConnection() private connection: Connection) {
    this.gridFSBucket = new GridFSBucket(this.connection.db!, {
      bucketName: 'uploads'
    });
  }

  async uploadFile(buffer: Buffer, filename: string, mimetype: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const uploadStream = this.gridFSBucket.openUploadStream(filename, {
        metadata: { mimetype }
      });

      uploadStream.on('error', reject);
      uploadStream.on('finish', () => {
        resolve(uploadStream.id.toString());
      });

      uploadStream.end(buffer);
    });
  }

  async getFile(id: string): Promise<{ stream: any; metadata: any }> {
    const objectId = new ObjectId(id);
    const files = await this.gridFSBucket.find({ _id: objectId }).toArray();
    
    if (!files.length) {
      throw new Error('File not found');
    }

    const stream = this.gridFSBucket.openDownloadStream(objectId);
    return { stream, metadata: files[0] };
  }

  async deleteFile(id: string): Promise<void> {
    const objectId = new ObjectId(id);
    await this.gridFSBucket.delete(objectId);
  }
}