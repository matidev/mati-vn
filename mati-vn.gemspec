# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name = "mati-vn"
  spec.version = "0.1.1"
  spec.authors = ["Tien Mai"]
  spec.email = ["matidev@outlook.com"]

  spec.summary = "Mati VN"
  spec.homepage = "https://mati.vn"
  spec.license = "MIT"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  spec.add_runtime_dependency "jekyll", "~> 3.9.2"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.15.1"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4.0"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8.0"
  spec.add_runtime_dependency "jemoji", "~> 0.12.0"
  spec.add_runtime_dependency "kramdown-parser-gfm", "~> 1.1.0"
  spec.add_development_dependency "bundler", "~> 2.1"
end
