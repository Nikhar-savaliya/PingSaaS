# PingSaaS

[What is PingSaaS](##what-is-Pingsaas)  
[Architecture](##architecture)  
[Todos](##todos)

## What is PingSaaS

**PingSaaS** is a SaaS platform for your SaaS. PingSaaS allows you to get notification about your SaaS directly to your discord Account. You can track any events with PingSaaS, whether you got new user, got payment, API fails etc.

PingSaaS provides API endpoint for you to use in your SaaS, this endpoint triggers an event in PingSaaS that pushes notification to you in your discord

## Architecture

### Tech-Stack

<p>
  <img src="https://go-skill-icons.vercel.app/api/icons?i=nextjs,ts,tailwindcss,reactquery,hono,prisma,postgresql,stripe,discordjs&titles=true" />
</p>

---

What is PingSaaS When you register to PingSaaS; You have ability to create events; events for example, new user registered! or received payment!;

What is PingSaaS In free tier you can have _max **3** event categories_; event category can be like Signup/Signin, Payment, API Fail etc.

What is PingSaaS Each event category can have more than one event; you can use event API endpoint in _more than 1 SaaS application_.

What is PingSaaS _Free tier_ allow you to have _**100** events per month_.

below code is example of the content you can have in your discord;

```json
{
  "category": "sale",
  "fields": {
    "SaaS": "your-saas-name",
    "message": "your saas got new sale",
    "plan": "PRO",
    "email": "patrickwhatson@fakemail.com",
    "amount": 49.99
  }
}
```

## Todos

- [ ] Improve loadtime / optimize image
- [ ] (BUG): user can create more than 3 categories for free tier
- [ ] (UI): In product category card, place emoji inside the category's color
- [x] (UI): Add a guide to get user's Discord ID.
- [ ] (UI): Add a section in homepage that shows how to add PingFoo bot to discord
