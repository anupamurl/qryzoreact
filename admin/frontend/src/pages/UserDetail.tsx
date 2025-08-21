import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Chip,
  Button,
  Divider,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import { userService } from '../services/authService';

type User = {
  _id: string;
  googleId?: string;
  email: string;
  name: string;
  picture?: string;
  profileCompleted?: boolean;
  lastLoginAt?: string;
  qrCodesGenerated?: number;
  createdAt: string;
  updatedAt: string;
  address?: string;
  city?: string;
  phone?: string;
  shopName?: string;
  state?: string;
  zipCode?: string;
  role?: string;
};

const UserDetail: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchUser(id);
    }
  }, [id]);

  const fetchUser = async (userId: string) => {
    try {
      const data = await userService.getById(userId);
      setUser(data);
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!user) {
    return <Typography>User not found</Typography>;
  }

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={3}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/users')}
          sx={{ mr: 2 }}
        >
          Back to Users
        </Button>
        <Typography variant="h4">User Details</Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Basic Information
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box mb={2}>
              <Typography variant="subtitle2" color="textSecondary">
                Name
              </Typography>
              <Typography variant="body1">{user.name}</Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="subtitle2" color="textSecondary">
                Email
              </Typography>
              <Typography variant="body1">{user.email}</Typography>
            </Box>
            {user.googleId && (
              <Box mb={2}>
                <Typography variant="subtitle2" color="textSecondary">
                  Google ID
                </Typography>
                <Typography variant="body1">{user.googleId}</Typography>
              </Box>
            )}
            {user.picture && (
              <Box mb={2}>
                <Typography variant="subtitle2" color="textSecondary">
                  Profile Picture
                </Typography>
                <img src={user.picture} alt="Profile" style={{ width: 50, height: 50, borderRadius: '50%' }} />
              </Box>
            )}
            {user.role && (
              <Box mb={2}>
                <Typography variant="subtitle2" color="textSecondary">
                  Role
                </Typography>
                <Chip
                  label={user.role}
                  color={user.role === 'superadmin' ? 'primary' : 'default'}
                  size="small"
                />
              </Box>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {user.shopName && (
              <Box mb={2}>
                <Typography variant="subtitle2" color="textSecondary">
                  Shop Name
                </Typography>
                <Typography variant="body1">{user.shopName}</Typography>
              </Box>
            )}
            {user.phone && (
              <Box mb={2}>
                <Typography variant="subtitle2" color="textSecondary">
                  Phone
                </Typography>
                <Typography variant="body1">{user.phone}</Typography>
              </Box>
            )}
            {user.address && (
              <Box mb={2}>
                <Typography variant="subtitle2" color="textSecondary">
                  Address
                </Typography>
                <Typography variant="body1">{user.address}</Typography>
              </Box>
            )}
            {user.city && (
              <Box mb={2}>
                <Typography variant="subtitle2" color="textSecondary">
                  City
                </Typography>
                <Typography variant="body1">{user.city}</Typography>
              </Box>
            )}
            {user.state && (
              <Box mb={2}>
                <Typography variant="subtitle2" color="textSecondary">
                  State
                </Typography>
                <Typography variant="body1">{user.state}</Typography>
              </Box>
            )}
            {user.zipCode && (
              <Box mb={2}>
                <Typography variant="subtitle2" color="textSecondary">
                  Zip Code
                </Typography>
                <Typography variant="body1">{user.zipCode}</Typography>
              </Box>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Account Information
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box mb={2}>
                  <Typography variant="subtitle2" color="textSecondary">
                    User ID
                  </Typography>
                  <Typography variant="body1">{user._id}</Typography>
                </Box>
                <Box mb={2}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Profile Completed
                  </Typography>
                  <Chip
                    label={user.profileCompleted ? 'Yes' : 'No'}
                    color={user.profileCompleted ? 'success' : 'warning'}
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box mb={2}>
                  <Typography variant="subtitle2" color="textSecondary">
                    QR Codes Generated
                  </Typography>
                  <Typography variant="body1">{user.qrCodesGenerated || 0}</Typography>
                </Box>
                {user.lastLoginAt && (
                  <Box mb={2}>
                    <Typography variant="subtitle2" color="textSecondary">
                      Last Login
                    </Typography>
                    <Typography variant="body1">
                      {new Date(user.lastLoginAt).toLocaleString()}
                    </Typography>
                  </Box>
                )}
              </Grid>
              <Grid item xs={12} md={4}>
                <Box mb={2}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Created At
                  </Typography>
                  <Typography variant="body1">
                    {new Date(user.createdAt).toLocaleString()}
                  </Typography>
                </Box>
                <Box mb={2}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Last Updated
                  </Typography>
                  <Typography variant="body1">
                    {new Date(user.updatedAt).toLocaleString()}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDetail;