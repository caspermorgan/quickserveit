# PowerShell script to batch update import paths for migrated components

$rootPath = "c:\Users\vinod\Documents\Agency\quickserveit\src"

# Define replacement mappings (old path -> new path)
$replacements = @{
    "from '@/components/FloatingNavbar'" = "from '@/modules/core/components/FloatingNavbar'"
    "from '@/components/Footer'" = "from '@/modules/core/components/Footer'"
    "from '@/components/CursorLight'" = "from '@/modules/core/components/CursorLight'"
    "from '@/components/FilmGrain'" = "from '@/modules/core/components/FilmGrain'"
    "from '@/components/SEO'" = "from '@/modules/core/components/SEO'"
    "from '@/components/FloatingContactButton'" = "from '@/modules/core/components/FloatingContactButton'"
    "from '@/components/ServicesSection'" = "from '@/modules/core/components/ServicesSection'"
    "from '@/components/layouts/BentoGrid'" = "from '@/modules/core/layouts/BentoGrid'"
    "from '@/components/layout/PageWrapper'" = "from '@/modules/core/layouts/PageWrapper'"
    "from '@/components/layout/PageHeader'" = "from '@/modules/core/layouts/PageHeader'"
    "from '@/components/TrustIndicators'" = "from '@/modules/institutional/components/TrustIndicators'"
    "from '@/components/CredibilitySection'" = "from '@/modules/institutional/components/CredibilitySection'"
    "from '@/components/ProofOfWorkSlider'" = "from '@/modules/institutional/components/ProofOfWorkSlider'"
    "from '@/components/CreatorModeNotice'" = "from '@/modules/creator/components/CreatorModeNotice'"
}

# Get all TypeScript/TSX files
$files = Get-ChildItem -Path $rootPath -Recurse -Include *.ts,*.tsx -File

$updatedCount = 0

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    $originalContent = $content
    
    # Apply all replacements
    foreach ($old in $replacements.Keys) {
        $new = $replacements[$old]
        $content = $content -replace [regex]::Escape($old), $new
    }
    
    # Only write if content changed
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.FullName)"
        $updatedCount++
    }
}

Write-Host "`nTotal files updated: $updatedCount"
