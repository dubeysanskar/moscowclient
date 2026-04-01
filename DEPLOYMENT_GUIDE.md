# DEPLOYMENT GUIDE — Taha Airwaves Russia

> Production deployment on Yandex Cloud VM (Ubuntu 24.04 LTS)
> Last updated: March 27, 2026

---

## Server Details

| Item | Value |
|---|---|
| **Provider** | Yandex Cloud |
| **OS** | Ubuntu 24.04 LTS |
| **IP** | `158.160.238.182` |
| **SSH User** | `jobaffairin` |
| **App Path** | `/home/jobaffairin/tahaairwaves-russia` |
| **Domain** | `tahaairwaves.ru` |
| **Stack** | Node.js 20 + Next.js + PM2 + Nginx |

---

## 1. SSH Access

```bash
# From your local machine (Windows PowerShell)
ssh jobaffairin@158.160.238.182
```

- SSH key: `C:\Users\Dell\.ssh\id_rsa` (RSA key, added to Yandex Cloud console)
- First connection: accept fingerprint with `yes`

---

## 2. Installed Software

| Software | Version | Purpose |
|---|---|---|
| Node.js | v20.x LTS | Runtime |
| npm | v10.x | Package manager |
| PM2 | v6.0.14 | Process manager (auto-restart, startup) |
| Nginx | v1.24.0 | Reverse proxy (port 80 → 3000) |
| Git | v2.43.0 | Code deployment |
| UFW | Active | Firewall (ports 22, 80, 443) |

---

## 3. Deploy / Update App

```bash
# SSH into server
ssh jobaffairin@158.160.238.182

# Pull latest code, rebuild, restart
cd ~/tahaairwaves-russia
git pull
npm install
npm run build
pm2 restart tahaairwaves
```

### First-Time Setup (already done)

```bash
git clone git@github.com:dubeysanskar/moscowclient.git
cd tahaairwaves-russia
npm install

# Copy .env.local from local machine (run on your laptop):
# scp .env.local jobaffairin@158.160.238.182:~/tahaairwaves-russia/.env.local

npm run build
pm2 start npm --name tahaairwaves -- start
pm2 save
pm2 startup  # follow printed command with sudo
```

---

## 4. Environment Variables

File: `/home/jobaffairin/tahaairwaves-russia/.env.local`

| Variable | Description |
|---|---|
| `GEMINI_API_KEY` | Google Gemini API key for chatbot |
| `RESEND_API_KEY` | Resend email fallback |
| `SMTP_HOST` | Gmail SMTP (`smtp.gmail.com`) |
| `SMTP_PORT` | `465` (SSL) |
| `SMTP_USER` | `info@tahaairwaves.com` |
| `SMTP_PASS` | App password |
| `SMTP_FROM` | `info@tahaairwaves.com` |
| `CONTACT_EMAIL` | `info@tahaairwaves.com` |
| `NOTIFICATION_EMAILS` | Comma-separated recipient list |
| `NEXT_PUBLIC_SITE_URL` | `https://tahaairwaves.ru` |

> ⚠️ After editing `.env.local`, you must rebuild and restart:
> `npm run build && pm2 restart tahaairwaves`

---

## 5. Nginx Configuration

File: `/etc/nginx/sites-available/tahaairwaves`

```nginx
server {
    listen 80;
    server_name 158.160.238.182 tahaairwaves.ru www.tahaairwaves.ru;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Edit & reload:**
```bash
sudo nano /etc/nginx/sites-available/tahaairwaves
sudo nginx -t
sudo systemctl restart nginx
```

---

## 6. PM2 Commands

```bash
pm2 status                    # Check app status
pm2 logs tahaairwaves         # View real-time logs
pm2 restart tahaairwaves      # Restart app
pm2 stop tahaairwaves         # Stop app
pm2 delete tahaairwaves       # Remove from PM2
pm2 save                      # Save process list for reboot
pm2 monit                     # Live monitoring dashboard
```

---

## 7. Firewall (UFW)

```bash
sudo ufw status               # Check rules
sudo ufw allow 22             # SSH
sudo ufw allow 80             # HTTP
sudo ufw allow 443            # HTTPS
```

**Yandex Cloud Security Groups** must also allow inbound TCP on ports 22, 80, 443 from `0.0.0.0/0`.

---

## 8. Domain + SSL Setup

### Step 1: Point DNS

At your domain registrar, add:
- **A record**: `tahaairwaves.ru` → `158.160.238.182`
- **A record**: `www.tahaairwaves.ru` → `158.160.238.182`

### Step 2: Install SSL with Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d tahaairwaves.ru -d www.tahaairwaves.ru
```

Follow prompts: enter email, agree to terms, choose "redirect HTTP→HTTPS".

### Step 3: Verify auto-renewal

```bash
sudo certbot renew --dry-run
```

---

## 9. Troubleshooting

| Problem | Solution |
|---|---|
| Site not loading | `pm2 status` → check if "online". If "errored": `pm2 logs tahaairwaves` |
| 502 Bad Gateway | App crashed. `pm2 restart tahaairwaves` |
| Nginx config error | `sudo nginx -t` to check syntax |
| Can't SSH | Check Yandex Security Group has port 22 open |
| Port 80 blocked | `sudo ufw status` — ensure 80 is ALLOW |
| Build fails | Check `.env.local` exists, run `npm install` first |
| After reboot, app down | Run `pm2 resurrect` or `pm2 startup` again |

---

## 10. Quick Reference

```bash
# Full deploy cycle (from your laptop)
ssh jobaffairin@158.160.238.182 "cd ~/tahaairwaves-russia && git pull && npm install && npm run build && pm2 restart tahaairwaves"

# Check server health
ssh jobaffairin@158.160.238.182 "pm2 status && curl -s -o /dev/null -w '%{http_code}' http://localhost:3000"

# View last 50 log lines
ssh jobaffairin@158.160.238.182 "pm2 logs tahaairwaves --lines 50 --nostream"
```
