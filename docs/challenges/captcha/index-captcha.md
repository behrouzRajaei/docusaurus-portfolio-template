### 2. CAPTCHA Bypass challenge

#### Category:

Input Validation / Bot Prevention Failure

#### Description

The CAPTCHA mechanism in Juice Shop does not validate the CAPTCHA value on the server.
This makes it possible to submit feedback repeatedly without solving the CAPTCHA, simply by replaying the request.

#### Exploitation Steps

1. Log out and go to the Customer Feedback section.

2. Write a comment, choose a rating, and solve the CAPTCHA only once.

3. Enable Intercept in Burp Suite and click Submit.

4. In Burp, capture the POST /api/feedback request.

5. Send this request to Repeater.

6. Back in the browser, write another comment but do not solve the CAPTCHA.

7. Instead, repeatedly click Send in Repeater to bypass the CAPTCHA.

8. Each repeated request is accepted successfully despite not solving the CAPTCHA image again.

#### Risks & Impact

- Automated spam through mass feedback submissions

- CAPTCHA becomes ineffective

- Bots can abuse forms and generate noise

- Potential for automated large-scale attacks

#### Result

The challenge is solved once multiple feedback entries are submitted without ever solving the CAPTCHA again.

#### Challenge Video

[CAPTCHA Bypass —  Video Link](https://www.loom.com/share/9cfd73dc034749449d7da6e9cf5f9f26)
