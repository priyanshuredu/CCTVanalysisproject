
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Users, Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

export function UserManagement() {
  const [users, setUsers] = useState([
    {
      id: '1',
      name: 'John Administrator',
      email: 'john@security.com',
      role: 'admin',
      status: 'active',
      lastLogin: '2024-01-15 14:30'
    },
    {
      id: '2',
      name: 'Sarah Monitor',
      email: 'sarah@security.com',
      role: 'operator',
      status: 'active',
      lastLogin: '2024-01-15 09:15'
    },
    {
      id: '3',
      name: 'Mike Security',
      email: 'mike@security.com',
      role: 'viewer',
      status: 'inactive',
      lastLogin: '2024-01-10 16:45'
    }
  ]);

  const [showAddUser, setShowAddUser] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: '',
    password: ''
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-500/20 text-red-500';
      case 'operator':
        return 'bg-blue-500/20 text-blue-500';
      case 'viewer':
        return 'bg-green-500/20 text-green-500';
      default:
        return 'bg-gray-500/20 text-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active'
      ? 'bg-green-500/20 text-green-500'
      : 'bg-gray-500/20 text-gray-500';
  };

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.role) {
      toast.error('Please fill in all required fields');
      return;
    }

    const user = {
      id: Date.now().toString(),
      ...newUser,
      status: 'active',
      lastLogin: 'Never'
    };

    setUsers([...users, user]);
    setNewUser({ name: '', email: '', role: '', password: '' });
    setShowAddUser(false);
    toast.success('User added successfully');
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(u => u.id !== userId));
    toast.success('User deleted successfully');
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            User Management
          </CardTitle>
          <Button onClick={() => setShowAddUser(!showAddUser)}>
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {showAddUser && (
          <div className="border rounded-lg p-4 bg-muted/50">
            <h3 className="font-medium mb-4">Add New User</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Select value={newUser.role} onValueChange={(value) => setNewUser({ ...newUser, role: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="operator">Operator</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button onClick={handleAddUser}>Add User</Button>
              <Button variant="outline" onClick={() => setShowAddUser(false)}>Cancel</Button>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="font-medium">{user.name}</h4>
                  <Badge className={getRoleColor(user.role)}>
                    {user.role}
                  </Badge>
                  <Badge className={getStatusColor(user.status)}>
                    {user.status}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  <div>{user.email}</div>
                  <div>Last login: {user.lastLogin}</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDeleteUser(user.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
