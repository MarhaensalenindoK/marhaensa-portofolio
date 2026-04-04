<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    private $projects = [
        [
            'slug' => 'finance-tracker',
            'title' => 'Finance Tracker Application',
            'short_desc' => 'Aplikasi pencatatan keuangan pribadi dengan fitur batch import dan manajemen budget cerdas.',
            'long_desc' => 'Berawal dari kebutuhan akan sistem pencatatan keuangan yang tidak hanya sebatas input-output ganda, namun juga mendukung perencanaan anggaran dan input massal untuk keperluan demo dan analisis. Tantangan terbesarnya adalah mengoptimalkan bulk import hingga ribuan baris data seketika dengan validasi limit dan kategori otomatis.',
            'role' => 'Fullstack Developer',
            'tech_stack' => ['Laravel', 'React', 'TypeScript', 'MySQL'],
            'demo_url' => 'https://expense.komara.id',
            'demo_credentials' => [
                'email' => 'admindemo',
                'password' => '1'
            ],
            'mockup_image' => 'assets/komara-finance-tracker.jpeg',
            'markdown_guide' => 'finance.md'
        ],
        [
            'slug' => 'company-profile',
            'title' => 'Komara Adventure (Company Profile)',
            'short_desc' => 'Company profile dinamis untuk jasa tour & travel Jeep Merapi Adventure, bisa by request, salah satu contoh client kita adalah https://jeepmerapiadventure.id/',
            'long_desc' => 'Proyek ini berfokus pada redesign website penyedia layanan wisata petualangan Jeep. Tujuan utamanya adalah menyajikan pengalaman pengguna yang sangat menarik (wow factor) dengan kecepatan halaman yang baik, dan SEO-ready. Pengunjung dapat melihat paket wisata, foto perjalanan, dan detail layanan dengan transisi yang efisien.',
            'role' => 'Frontend Web Developer',
            'tech_stack' => ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
            'demo_url' => 'https://company-profile-demo.komara.id/',
            'demo_credentials' => [
                'email' => 'admindemo@komaraadventure.com',
                'password' => '1'
            ],
            'mockup_image' => 'assets/komara-adventure.jpeg',
            'markdown_guide' => 'jeep.md'
        ],
        [
            'slug' => 'wedding-invitation',
            'title' => 'Wedding Invitation - Ethereal Editorial',
            'short_desc' => 'Website undangan pernikahan eksklusif dengan filosofi desain Ethereal Editorial, fitur RSVP digital, dan Wedding Gift modern.',
            'long_desc' => 'Proyek ini mengusung estetika gaya majalah editorial mewah dengan perpaduan tipografi Noto Serif dan Manrope. Fokus utama adalah pada pengalaman pengguna yang premium, asimetris, dan transisi yang halus. Dilengkapi sistem RSVP real-time dan manajemen hadiah pernikahan digital yang aman.',
            'role' => 'Frontend Developer',
            'tech_stack' => ['HTML5', 'CSS3', 'JavaScript', 'Vanilla JS'],
            'demo_url' => 'https://wedding-plate.komara.id',
            'mockup_image' => 'assets/wedding-guide/hero-desktop.png',
            'markdown_guide' => 'wedding.md'
        ]
    ];

    public function index()
    {
        return view('pages.home', [
            'projects' => $this->projects
        ]);
    }

    public function show($slug)
    {
        $project = collect($this->projects)->firstWhere('slug', $slug);

        if (!$project) {
            abort(404);
        }

        $guideContent = null;
        if (isset($project['markdown_guide'])) {
            $path = resource_path('markdown/' . $project['markdown_guide']);
            if (file_exists($path)) {
                $guideContent = file_get_contents($path);
            }
        }

        return view('pages.portfolio-detail', [
            'project' => $project,
            'guideContent' => $guideContent
        ]);
    }
}
