export const attackDistribution = [
  { name: "Normal", value: 62 },
  { name: "DDoS", value: 15 },
  { name: "Port Scan", value: 10 },
  { name: "SQL Injection", value: 6 },
  { name: "XSS", value: 4 },
  { name: "Botnet", value: 3 },
];

export const threatTimeline = [
  { time: "09:00", threats: 3 },
  { time: "10:00", threats: 5 },
  { time: "11:00", threats: 8 },
  { time: "12:00", threats: 4 },
  { time: "13:00", threats: 11 },
  { time: "14:00", threats: 6 },
  { time: "15:00", threats: 7 },
];

export const packetLogs = [
  {
    time: "13:42:11",
    ip: "192.168.1.24",
    protocol: "TCP",
    status: "Normal",
  },
  {
    time: "13:42:18",
    ip: "10.0.0.8",
    protocol: "HTTP",
    status: "Port Scan",
  },
  {
    time: "13:42:23",
    ip: "172.16.2.4",
    protocol: "HTTPS",
    status: "DDoS",
  },
  {
    time: "13:42:29",
    ip: "203.15.8.2",
    protocol: "TCP",
    status: "Normal",
  },
];

export const securityEvents = [
  "Firewall initialized",
  "Port Scan detected",
  "Blocked IP 10.0.0.8",
  "AI model loaded",
  "Threat intelligence updated",
];