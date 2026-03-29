<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portofolio Marhaensalenindo Komara</title>
    
    <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    <nav id="navbar">
        <ul>
            <li><a href="{{ route('home') }}#hero">Beranda</a></li>
            <li><a href="{{ route('home') }}#about">Tentang</a></li>
            <li><a href="{{ route('home') }}#portfolio">Portofolio</a></li>
            <li><a href="{{ route('home') }}#skills">Keahlian</a></li>
            <li><a href="{{ route('home') }}#experience">Pengalaman</a></li>
        </ul>
    </nav>

    @yield('content')

    <footer>
        <p>&copy; {{ date('Y') }} Marhaensalenindo Komara. Hak Cipta Dilindungi.</p>
    </footer>

    <!-- jQuery & CDNs -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.3/dist/chart.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-chart-financial/dist/chartjs-chart-financial.min.js"></script>
</body>
</html>
