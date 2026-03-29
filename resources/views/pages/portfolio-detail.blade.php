@extends('layouts.app')

@section('content')

    <!-- Tombol Kembali -->
    <a href="{{ route('home') }}" class="btn-back">
        <i class="fas fa-arrow-left"></i> Kembali ke Beranda
    </a>

    <section id="portfolio-header" class="detail-header" style="background-image: url('{{ asset($project['mockup_image']) }}');">
        <div class="overlay"></div>
        <div class="header-content gsap-header-reveal">
            <h1>{{ $project['title'] }}</h1>
            <p class="role-badge">{{ $project['role'] }}</p>
        </div>
    </section>

    <section id="portfolio-content" class="detail-content gsap-slide-up">
        <div class="container">
            <div class="project-info">
                <div class="project-description">
                    <h2>Tentang Proyek</h2>
                    <p>{{ $project['long_desc'] }}</p>
                    
                    @if (!empty($guideContent))
                        <div class="guide-content mt-5">
                            <h2>Panduan & Fitur Proyek</h2>
                            <hr class="guide-divider"/>
                            <div class="markdown-body">
                                {!! Str::markdown($guideContent) !!}
                            </div>
                        </div>
                    @endif
                </div>
                
                <div class="project-sidebar">
                    <h3>Tech Stack</h3>
                    <div class="tech-badges">
                        @foreach ($project['tech_stack'] as $tech)
                            <span class="badge">{{ $tech }}</span>
                        @endforeach
                    </div>

                    <h3>Akses Demo</h3>
                    <div class="project-links">
                        @if (isset($project['demo_url']))
                            <a href="{{ $project['demo_url'] }}" target="_blank" class="btn-demo"><i class="fas fa-external-link-alt"></i> Kunjungi Live Demo</a>
                        @endif
                        
                        @if (isset($project['demo_credentials']))
                            <div class="demo-credentials">
                                <strong>Akun Demo:</strong><br/>
                                <i class="fas fa-user"></i> {{ $project['demo_credentials']['email'] }}<br/>
                                <i class="fas fa-key"></i> {{ $project['demo_credentials']['password'] }}
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection
