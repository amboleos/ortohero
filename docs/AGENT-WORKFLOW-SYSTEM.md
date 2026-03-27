# Orthero Clone - Agent Workflow Sistemi

## 1. Bu Oturumda Yapılanlar (2026-03-27)

### Hedef
www.ortheroaligner.com ana sayfasının birebir klonunu oluşturmak.

### Kullanılan Yaklaşım
**Brainstorming → Planning → Subagent-Driven Execution**

### Adımlar

#### 1. Araştırma ve Analiz
- **Araç:** `agent-browser` skill
- Site açıldı, full-page screenshot alındı
- Snapshot ile element'ler analiz edildi
- `web-reader` ile HTML yapısı çekildi
- `ui_to_artifact` ile görsel spec çıkarıldı

#### 2. Brainstorming
- Proje yapısı analiz edildi (mevcut dosyalar okundu)
- Mevcut uygulama ile orijinal site karşılaştırıldı
- 3 yaklaşım sunuldu, "Tam Birebir Clone" seçildi
- Design spec onaylandı

#### 3. Planning
- Design document yazıldı: `docs/superpowers/specs/2026-03-27-orthero-homepage-clone-design.md`
- Implementation plan yazıldı: `docs/superpowers/plans/2026-03-27-orthero-homepage-clone.md`
- Plan reviewer ile 2 iterasyon sonunda onaylandı

#### 4. Execution (Subagent-Driven)
| Task | Agent | Durum |
|------|-------|-------|
| Header.tsx update | Implementer (haiku) | ✅ DONE |
| Header spec review | Spec Reviewer (haiku) | ✅ Approved |
| Header code review | Code Reviewer (haiku) | ✅ Approved |
| Footer.tsx update | Implementer (haiku) | ✅ DONE |
| Footer spec review | Spec Reviewer (haiku) | ✅ Approved |
| Footer code review | Code Reviewer (haiku) | ✅ Approved |
| NewsletterSection verify | Manual check | ✅ Already correct |
| HomeStatsBar verify | Manual check | ✅ Already correct |
| Build verification | npm run build | ✅ Success |
| Git push | git push | ✅ Done |

### Değiştirilen Dosyalar
```
components/layout/Header.tsx  → Mega-menu + 4 kategori + dil seçici
components/layout/Footer.tsx  → 4 sütun + sosyal ikonlar + doğru linkler
```

### Commits
```
c45d174 feat(header): add mega-menu with category cards, full navigation, and language selector
4bf3f4c feat(footer): update to 4-column layout with correct links and social icons
dc0aab3 docs: add design spec and implementation plan for Orthero homepage clone
```

---

## 2. Çok Agent'lı Sayfa Güncelleme Sistemi

### Sistem Mimarisi

```
┌─────────────────────────────────────────────────────────────────┐
│                     ORCHESTRATOR AGENT                          │
│  (Ana agent - koordinasyon, görev dağıtımı, final onay)         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      TASK QUEUE                                 │
│  (Hangi sayfalar güncellenecek, öncelikler, durumlar)           │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┴───────────────┐
              ▼                               ▼
┌─────────────────────────┐     ┌─────────────────────────┐
│    IMPLEMENTER AGENT    │     │    REVIEWER AGENT       │
│  (Yazar, implement eder) │◄───►│  (Kontrol eder, onaylar)│
└─────────────────────────┘     └─────────────────────────┘
```

### Agent Rolleri

#### 1. ORCHESTRATOR AGENT (Koordinatör)
**Sorumluluk:**
- Kullanıcıdan gelen istekleri parse eder
- Hangi sayfaların güncelleneceğini belirler
- Task queue oluşturur
- Implementer ve Reviewer agent'ları dispatch eder
- Final kalite kontrolü yapar
- Commit ve push işlemlerini yönetir

**Kullanacağı Tools:**
- `TaskCreate`, `TaskUpdate`, `TaskList` - Görev yönetimi
- `Agent` - Subagent dispatch
- `SendMessage` - Agent'lar arası iletişim
- `Bash` - Git işlemleri
- `Read`, `Glob`, `Grep` - Proje analizi

**Model:** Claude Sonnet/Opus (yüksek koordinasyon yeteneği)

---

#### 2. IMPLEMENTER AGENT (Yazıcı)
**Sorumluluk:**
- Verilen sayfa için kod yazar
- Design system'e uygun çalışır
- Responsive tasarım yapar
- Self-review yapar
- Soruları Orchestrator'a sorar

**Kullanacağı Tools:**
- `Read` - Mevcut dosyaları okur
- `Write`, `Edit` - Kod yazar
- `Glob`, `Grep` - Proje yapısını anlar
- `Bash` - Build testi yapar
- `mcp__web-reader__webReader` - Orijinal siteyi analiz eder
- `mcp__4_5v_mcp__analyze_image` - Screenshot analizi

**Model:** Claude Sonnet (dengeli performans/maliyet)

**Çalışma Akışı:**
```
1. Orchestrator'dan task al
2. Orijinal siteyi incele (screenshot + HTML)
3. Design system'i oku (docs/DESIGN-SYSTEM.md)
4. Mevcut sayfa kodunu oku
5. Kodu yaz/güncelle
6. Self-review yap
7. Reviewer'a gönder
8. Feedback varsa düzelt
9. Tamamla ve raporla
```

---

#### 3. REVIEWER AGENT (Kontrolcü)
**Sorumluluk:**
- Implementer'ın yazdığı kodu review eder
- Design system uyumluluğunu kontrol eder
- Orijinal site ile görsel karşılaştırma yapar
- Accessibility kontrolü yapar
- Onay/Red kararını bildirir

**Kullanacağı Tools:**
- `Read` - Kod okur
- `agent-browser` - Orijinal siteyi açar
- `mcp__zai-mcp-server__ui_diff_check` - UI karşılaştırma
- `Bash` - npm run build testi
- `Grep` - Pattern kontrolü

**Model:** Claude Sonnet/Opus (yüksek doğruluk gerekli)

**Review Checklist:**
```
□ Design system renkleri doğru mu?
□ Typography doğru mu?
□ Responsive çalışıyor mu?
□ Orijinal site ile görsel olarak aynı mı?
□ Accessibility (ARIA labels, contrast)
□ TypeScript hatası var mı?
□ Console error var mı?
```

---

### Yeni Chat Başlatma Protokolü

Kullanıcı yeni bir chat açtığında şu prompt'u verin:

```
Orthero Clone projesinde sayfa güncellemeleri yapılacak.

## Aktif Sistem
- Orchestrator Agent: Koordinasyon ve task yönetimi
- Implementer Agent: Kod yazma
- Reviewer Agent: Kalite kontrol

## Mevcut Sayfalar
| Sayfa | Route | Durum |
|-------|-------|-------|
| Home | / | ✅ Clone complete |
| About | /about | ⏳ Needs update |
| Treatment Process | /treatment-process | ⏳ Needs update |
| Advantages | /advantages | ⏳ Needs update |
| ... | ... | ... |

## Hangi sayfaları güncellememi istiyorsun?
Örnek: "About ve Treatment Process sayfalarını orijinal siteyle güncelle"
```

---

### Sayfa Güncelleme Workflow'u

```
USER REQUEST
     │
     ▼
┌─────────────────────────────────────────┐
│ ORCHESTRATOR                             │
│ 1. Request'i parse et                    │
│ 2. Hedef sayfaları belirle               │
│ 3. Task queue oluştur                    │
│ 4. Her sayfa için:                       │
│    a. Implementer dispatch                │
│    b. Implementation bekle                │
│    c. Reviewer dispatch                   │
│    d. Review sonucunu bekle               │
│    e. Issues varsa Implementer'a fix lat │
│    f. Onaylanınca task'ı kapat           │
│ 5. Final build test                      │
│ 6. Git commit + push                     │
└─────────────────────────────────────────┘
     │
     ▼
  COMPLETE
```

---

### Implementer Agent Prompt Template

```
You are the IMPLEMENTER agent for Orthero Clone project.

## Your Task
Update the page: {PAGE_NAME} at route {ROUTE}

## Resources
- Original site: https://www.ortheroaligner.com{ROUTE}
- Design system: docs/DESIGN-SYSTEM.md
- Content file: pages/{PAGE_FOLDER}/content.md
- Target file: app{ROUTE}/page.tsx

## Instructions
1. Use agent-browser to open the original page
2. Take screenshot and analyze the layout
3. Read the design system
4. Read the current page code
5. Update the code to match the original exactly
6. Ensure responsive design
7. Run npm run build to verify no errors
8. Report DONE or NEEDS_HELP

## Constraints
- Use existing components from @/components
- Follow Tailwind CSS patterns from design system
- Use colors: Primary #330388, Accent #BB1AA0
- Use external images from ortheroaligner.com

## Report Format
Status: DONE | DONE_WITH_CONCERNS | NEEDS_HELP
Changes: [list of changes made]
Concerns: [any issues or observations]
```

---

### Reviewer Agent Prompt Template

```
You are the REVIEWER agent for Orthero Clone project.

## Your Task
Review the implementation of: {PAGE_NAME}

## Files to Review
- Main: app{ROUTE}/page.tsx
- Components: [list of related components]

## Review Checklist
□ Matches original site visually?
□ Design system colors correct?
□ Typography correct?
□ Responsive at 375px, 768px, 1280px?
□ No TypeScript errors?
□ No console errors?
□ Accessibility: ARIA labels present?
□ Accessibility: Color contrast OK?
□ All links working?
□ Images loading correctly?

## Tools to Use
1. agent-browser: Open both original and clone for comparison
2. mcp__zai-mcp-server__ui_diff_check: Visual diff comparison
3. Read: Check the code implementation
4. Bash: npm run build for error check

## Report Format
Status: APPROVED | NEEDS_FIXES
Issues: [list of issues if any]
Strengths: [what's done well]
```

---

### Hata Durumunda Akış

```
Reviewer: "NEEDS_FIXES - Issue: Button color is #BB1AA0, should be #330388"
     │
     ▼
Orchestrator: Dispatches fix task to Implementer
     │
     ▼
Implementer: Fixes the issue, reports DONE
     │
     ▼
Orchestrator: Dispatches same Reviewer again
     │
     ▼
Reviewer: Checks the fix, reports APPROVED
     │
     ▼
Orchestrator: Marks task complete, moves to next
```

---

### Örnek Kullanım Senaryosu

**Kullanıcı:** "About sayfasını güncelle"

**Orchestrator:**
```
1. Task oluşturuyor: "Update About page"
2. Implementer dispatch ediliyor...

[IMPLEMENTER AGENT BAŞLIYOR]
- Orijinal site açılıyor: /about
- Screenshot alınıyor
- Design system okunuyor
- Mevcut /about/page.tsx okunuyor
- Kod güncelleniyor
- Build test: ✅ Success
- Status: DONE

[REVIEWER AGENT BAŞLIYOR]
- Orijinal site açılıyor
- Clone açılıyor
- Visual diff yapılıyor
- Kod review ediliyor
- Status: APPROVED

3. Task tamamlandı
4. Commit: "feat(about): update page to match original site"
5. Push to main
```

---

### Teknik Gereksinimler

#### Gerekli MCP Server'lar
```json
{
  "mcpServers": {
    "agent-browser": "Browser automation için",
    "web-reader": "HTML content çekme için",
    "zai-mcp-server": "UI diff ve image analysis için",
    "4_5v_mcp": "Image analysis için"
  }
}
```

#### Gerekli Skills
```
superpowers:brainstorming     - İlk analiz için
superpowers:writing-plans     - Plan yazma için
superpowers:subagent-driven-development - Execution için
superpowers:requesting-code-review - Review için
```

---

### Performans Optimizasyonu

| İşlem | Önerilen Model | Neden |
|-------|---------------|-------|
| Simple text update | Haiku | Hızlı, ucuz |
| Component update | Sonnet | Dengeli |
| Complex redesign | Opus | Yüksek kalite |
| Final review | Opus | Doğruluk önemli |

---

### Dikkat Edilmesi Gerekenler

1. **Her zaman design system'i oku** - Renkler ve typography tutarlı olmalı
2. **External image'leri koru** - ortheroaligner.com'dan yükleniyor
3. **Responsive test et** - Mobile-first yaklaşım
4. **Build test yap** - TypeScript hatasız olmalı
5. **Commit message standardı** - `feat(page): description` formatı
6. **Reviewer onayı olmadan commit yapma** - Kalite kontrol şart
7. **Issues varsa fix yap ve tekrar review al** - Döngü tamamlanmalı

---

### Gelecek Geliştirmeler

- [ ] Paralel sayfa güncelleme (birden fazla Implementer)
- [ ] Otomatik visual regression test
- [ ] E2E test entegrasyonu (Playwright)
- [ ] Performance monitoring
- [ ] A11y audit automation

---

*Doküman oluşturulma: 2026-03-27*
*Son güncelleme: 2026-03-27*
