### 1. Client-side XSS Protection

#### Category:

Cross-Site Scripting (XSS) / Client-Side Input Validation

#### Description

The Juice Shop application attempts to block malicious input using client-side validation.
However, because validation happens only on the frontend, it can be bypassed by intercepting and modifying the request before it reaches the server.

#### Exploitation Steps

1. Register a new user inside Juice Shop but before clicking “Register,” turn on Intercept in Burp Suite.

2. Click Register, allowing Burp to intercept the POST /api/user request.

3. Send the intercepted request to Repeater.

4. From the Scoreboard hint, copy the provided payload:
```
'<iframe src="javascript:alert(`xss`)">'
```
5. Replace the email field in the JSON request with this payload.

6. Escape internal quotes to keep JSON valid:
```
'<iframe src=\"javascript:alert(`xss`)\">'
```
7. Click Send in Repeater to forward the modified request.

8. The browser processes the injected payload, triggering the XSS and solving the challenge.

#### Risks & Impact

- Execution of arbitrary JavaScript in a victim’s browser

- Session hijacking

- Account takeover

- Phishing, redirects, or keylogging

- Full compromise of user interaction inside the application

#### Result

The challenge is solved once the JavaScript alert executes successfully, proving that client-side protection was bypassed.

#### Challenge Video

[Client-side XSS Protection — Video Link](https://www.loom.com/share/53404102561e450685a398f69a681a15)
