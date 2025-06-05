function toggleSection(id) {
      const section = document.getElementById(id);
      if (section.classList.contains("active")) {{
        section.classList.remove("active");
      }} else {{
        document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
        section.classList.add("active");
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}
    }