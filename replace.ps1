$files = Get-ChildItem -Path "src" -Recurse -Filter "*.jsx"
foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName)
    $newContent = $content -replace '<h3', '<h2' -replace '</h3', '</h2'
    if ($content -cne $newContent) {
        [System.IO.File]::WriteAllText($f.FullName, $newContent)
        Write-Host "Updated: $($f.FullName)"
    }
}
