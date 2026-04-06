<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Gkay Tracker V1 BETA | README</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background: #F8F9FA; /* Önerdiğim Ghost White tonu */
            padding: 40px;
            border-radius: 12px;
            border-top: 8px solid #D90429; /* Önerdiğim Power Red tonu */
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #eee;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .logo-text {
            color: #D90429;
            font-weight: 800;
            font-size: 2.5em;
            margin: 0;
            letter-spacing: -1px;
        }
        .badge {
            display: inline-block;
            background: #D90429;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8em;
            font-weight: bold;
            vertical-align: middle;
        }
        .section {
            margin-bottom: 40px;
        }
        h2 {
            color: #212529;
            border-left: 5px solid #D90429;
            padding-left: 15px;
            margin-top: 30px;
        }
        .features-list {
            list-style: none;
            padding: 0;
        }
        .features-list li::before {
            content: "✓";
            color: #D90429;
            font-weight: bold;
            margin-right: 10px;
        }
        .lang-switch {
            display: flex;
            justify-content: space-between;
            gap: 20px;
        }
        .lang-box {
            flex: 1;
        }
        .footer {
            text-align: center;
            font-size: 0.9em;
            color: #777;
            margin-top: 50px;
            border-top: 1px solid #eee;
            padding-top: 20px;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h1 class="logo-text">Gkay Tracker <span class="badge">V1 BETA</span></h1>
        <p><em>Streamline your life, track your growth.</em></p>
    </div>

    <div class="lang-switch">
        <div class="lang-box">
            <h2>🇹🇷 Hakkında</h2>
            <p>Günlük hayatınızı düzene sokmak ve harcamalarınızı kontrol altında tutmak için geliştirilmiş, hafif ve kullanıcı dostu bir takip uygulamasıdır.</p>
            
            <h3>Özellikler</h3>
            <ul class="features-list">
                <li>Günlük hızlı not alma</li>
                <li>Harcama kategorilendirme ve takip</li>
                <li>Modern ve sade arayüz</li>
                <li>Netlify entegrasyonu</li>
            </ul>

            <p><small><strong>Not:</strong> Bu projenin belirli kısımlarında yapay zeka desteği kullanılmıştır.</small></p>
        </div>

        <div class="lang-box">
            <h2>🇺🇸 About</h2>
            <p>A lightweight and user-friendly tracking application designed to organize your daily life and keep your expenses under control.</p>
            
            <h3>Features</h3>
            <ul class="features-list">
                <li>Quick daily note-taking</li>
                <li>Expense logging and tracking</li>
                <li>Modern and clean UI</li>
                <li>Netlify optimized</li>
            </ul>

            <p><small><strong>Note:</strong> AI assistance was utilized in certain parts of this project.</small></p>
        </div>
    </div>

    <div class="section" style="text-align: center;">
        <h2>🚀 Live Demo / Canlı Demo</h2>
        <p>Uygulamayı Netlify üzerinden deneyin:</p>
        <a href="https://senin-linkin.netlify.app" style="color: #D90429; font-weight: bold; text-decoration: none;">👉 gkay-tracker.netlify.app</a>
    </div>

    <div class="footer">
        © 2026 Gkay Tracker - Designed with Passion
    </div>
</div>

</body>
</html>
