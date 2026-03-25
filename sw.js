<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#3D1F2D" />
  <title>You&rsquo;re Offline &mdash; More Hair by Makiah</title>
  <link rel="stylesheet" href="styles.css" />
  <style>
    .offline-wrap {
      min-height: 100vh;
      background: linear-gradient(135deg, #3D1F2D 0%, #5C3347 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;
    }
    .offline-icon {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      opacity: 0.7;
    }
    .offline-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2rem, 5vw, 3.2rem);
      color: #FFF8F0;
      margin-bottom: 1rem;
      line-height: 1.1;
    }
    .offline-title em { font-style: italic; color: #F4D186; }
    .offline-sub {
      color: rgba(255,240,220,0.65);
      font-size: 0.95rem;
      font-weight: 300;
      line-height: 1.8;
      max-width: 420px;
      margin-bottom: 2rem;
    }
    .offline-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    .offline-links a {
      color: #F4D186;
      text-decoration: none;
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      border-bottom: 1px solid rgba(244,209,134,0.4);
      padding-bottom: 2px;
      transition: opacity 0.2s;
    }
    .offline-links a:hover { opacity: 0.7; }
  </style>
</head>
<body>
  <div class="offline-wrap">
    <div class="offline-icon">&#128247;</div>
    <h1 class="offline-title">You&rsquo;re <em>Offline</em></h1>
    <p class="offline-sub">
      It looks like you&rsquo;re not connected to the internet right now.
      Check your connection and try again &mdash; we&rsquo;ll be here when you&rsquo;re back.
    </p>
    <div class="offline-links">
      <a href="index.html">Home</a>
      <a href="services.html">Services</a>
      <a href="booking.html">Book Now</a>
      <a href="contact.html">Contact</a>
    </div>
  </div>
</body>
</html>