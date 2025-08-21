import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import QRCode from 'qrcode.react';
import { userService } from '../services/authService';

type User = {
  _id: string;
  name: string;
  email: string;
  googleId?: string;
  shopName?: string;
};

type QRData = {
  id: string;
  value: string;
};

const GenerateQR: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [count, setCount] = useState(1);
  const [qrCodes, setQrCodes] = useState<QRData[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await userService.getAll();
      setUsers(data);
    } catch (error) {
      // Handle error
    }
  };

  const generateUniqueString = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const handleGenerate = () => {
    if (!selectedUser) return;

    const user = users.find(u => u._id === selectedUser);
    if (!user) return;

    const googleId = user.googleId || user.email.split('@')[0];
    const newQrCodes: QRData[] = [];

    for (let i = 0; i < count; i++) {
      const uniqueSuffix = generateUniqueString();
      const qrValue = `${googleId}_${i + 1}_${uniqueSuffix}`;
      newQrCodes.push({
        id: `qr_${Date.now()}_${i}`,
        value: qrValue,
      });
    }

    setQrCodes(newQrCodes);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Generate QR Code
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Select User</InputLabel>
              <Select
                value={selectedUser}
                label="Select User"
                onChange={(e) => setSelectedUser(e.target.value)}
              >
                {users.map((user) => (
                  <MenuItem key={user._id} value={user._id}>
                    {user.googleId || user.email.split('@')[0]} - {user.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Count</InputLabel>
              <Select
                value={count}
                label="Count"
                onChange={(e) => setCount(Number(e.target.value))}
              >
                {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                  <MenuItem key={num} value={num}>
                    {num}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Button
              variant="contained"
              onClick={handleGenerate}
              disabled={!selectedUser}
              fullWidth
              size="large"
            >
              Generate QR Codes
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {qrCodes.length > 0 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Generated QR Codes ({qrCodes.length})
          </Typography>
          <Box sx={{ maxHeight: 600, overflow: 'auto' }}>
            <Grid container spacing={2}>
              {qrCodes.map((qr) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={qr.id}>
                  <Card>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <QRCode value={qr.value} size={150} />
                      <Typography variant="caption" display="block" sx={{ mt: 1, wordBreak: 'break-all' }}>
                        {qr.value}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default GenerateQR;