---
id: v-server-setup
title: V-Server-Setup
sidebar_position: 1
slug: /projects/v-setup-server
---

## Project Structure
```
v-server-setup
├── Checkliste.pdf
└── README.md
```
---

## Technologies Used

* OpenSSH (key-based authentication only)
* NGINX Web Server
* Git + GitHub

---

## Prerequisites

* Linux Server
* GitHub account

---

## Server Setup Overview

### 1. SSH Access Configuration

* Generate a new SSH key pair

```bash
ssh-keygen -t ed25519 -C `<username>`@`<ip_address>`"
```

* Upload the public key to the server

```bash
ssh-copy-id `<username>`@`<ip_address>`
```

* Disable password-based login

```bash
sudo nano /etc/ssh/sshd_config
```

* Edit the folowing line in the sshd_config file

```
PasswordAuthentication no
```

* Test the configuration and restart the SSH service

```bash
sudo sshd -t
sudo systemctl restart ssh
```

### 2. NGINX Web Server

* Install and start NGINX

```bash
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

* Create a custom landing page

```bash
cd /var/www/html
sudo nano index.html
```

* Edit the `index.html` file and replace the default content with your own title and content
* Test the website in a browser

```
http://`<ip_address>`
```

### 4. Git + GitHub Integration

* Install and verify Git

```bash
sudo apt install git
```

* Configure Git by username and email

```bash
git config --global user.name "`<your_username>`"
git config --global user.email "`<your_email@example.com>`"
```

* Adding your SSH key to GitHub
To authenticate with GitHub using SSH, you need to add your public SSH key to your GitHub account.
First run the following command to display the content of your public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the entire output, then follow these steps:

```
├──Go to your GitHub account.
├──Click your profile picture and go to Settings.
├──Go to SSH and GPG keys from the left menu.
├──Click New SSH key.
├──Enter a title for this key.
├──Paste the copied public key into the Key field.
└──Click Add SSH key.
```

* Cloning the repository using SSH
To clone a repository using SSH:

```
├──Go to the repository on GitHub.
├──Click the green Code button.
├──Select the SSH tab.
└──Copy the SSH URL.
```

Then run:

```bash
git clone `<SSH URL>`
```

Replace `<SSH URL>` with the one you just copied.

* The project is now connected to GitHub and version controlled.
---

## Checklist

See the project checklist:

[Project Checklist](./CHECKLIST.md)
