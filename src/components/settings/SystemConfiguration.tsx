
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { toast } from 'sonner';
import { Settings, Save } from 'lucide-react';

export function SystemConfiguration() {
  const [config, setConfig] = useState({
    alertThreshold: 'medium',
    autoRecording: true,
    motionSensitivity: 'high',
    faceRecognition: true,
    objectDetection: true,
    nightVision: true,
    storageRetention: '30',
    alertEmail: 'admin@security.com',
    alertSMS: '+1234567890'
  });

  const handleSave = () => {
    toast.success('System configuration saved successfully');
    console.log('Saving config:', config);
  };

  const updateConfig = (key: string, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          System Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium">Detection Settings</h3>

            <div className="space-y-2">
              <Label>Alert Threshold</Label>
              <Select value={config.alertThreshold} onValueChange={(value) => updateConfig('alertThreshold', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Motion Sensitivity</Label>
              <Select value={config.motionSensitivity} onValueChange={(value) => updateConfig('motionSensitivity', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="face-recognition">Face Recognition</Label>
                <Switch
                  id="face-recognition"
                  checked={config.faceRecognition}
                  onCheckedChange={(checked) => updateConfig('faceRecognition', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="object-detection">Object Detection</Label>
                <Switch
                  id="object-detection"
                  checked={config.objectDetection}
                  onCheckedChange={(checked) => updateConfig('objectDetection', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="night-vision">Night Vision</Label>
                <Switch
                  id="night-vision"
                  checked={config.nightVision}
                  onCheckedChange={(checked) => updateConfig('nightVision', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="auto-recording">Auto Recording</Label>
                <Switch
                  id="auto-recording"
                  checked={config.autoRecording}
                  onCheckedChange={(checked) => updateConfig('autoRecording', checked)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Storage & Alerts</h3>

            <div className="space-y-2">
              <Label htmlFor="retention">Storage Retention (days)</Label>
              <Input
                id="retention"
                type="number"
                value={config.storageRetention}
                onChange={(e) => updateConfig('storageRetention', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="alert-email">Alert Email</Label>
              <Input
                id="alert-email"
                type="email"
                value={config.alertEmail}
                onChange={(e) => updateConfig('alertEmail', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="alert-sms">Alert SMS Number</Label>
              <Input
                id="alert-sms"
                type="tel"
                value={config.alertSMS}
                onChange={(e) => updateConfig('alertSMS', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <Button onClick={handleSave} className="w-full">
            <Save className="h-4 w-4 mr-2" />
            Save Configuration
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

