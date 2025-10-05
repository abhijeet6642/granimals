module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode: "class",
    theme: {
      screens: {
        sm: '640px',   
        md: '768px',    
        lg: '1024px',   
        xl: '1280px',
        '2xl': '1536px'
      },
      extend: {
        colors: {
          // Primary Colors
          primary: {
            background: "var(--primary-background)",
            foreground: "var(--primary-foreground)",
            light: "var(--primary-light)",
            dark: "var(--primary-dark)"
          },
          // Secondary Colors
          secondary: {
            background: "var(--secondary-background)",
            foreground: "var(--secondary-foreground)",
            light: "var(--secondary-light)",
            dark: "var(--secondary-dark)"
          },
          // Accent Colors
          accent: {
            yellow: "var(--accent-yellow)",
            'yellow-foreground': "var(--accent-yellow-foreground)",
            gray: "var(--accent-gray)",
            'light-gray': "var(--accent-light-gray)"
          },
          // Text Colors
          text: {
            primary: "var(--text-primary)",
            secondary: "var(--text-secondary)",
            light: "var(--text-light)",
            lighter: "var(--text-lighter)",
            white: "var(--text-white)",
            accent: "var(--text-accent)"
          },
          // Background Colors
          background: {
            main: "var(--bg-main)",
            'main-transparent': "var(--bg-main-transparent)",
            dark: "var(--bg-dark)",
            white: "var(--bg-white)",
            gray: "var(--bg-gray)"
          },
          // Border Colors
          border: {
            primary: "var(--border-primary)",
            accent: "var(--border-accent)",
            white: "var(--border-white)"
          },
          // Component Colors
          star: {
            background: "var(--star-bg)",
            accent: "var(--star-accent)"
          },
          button: {
            primary: "var(--button-primary)"
          },
          card: {
            background: "var(--card-background)"
          },
          testimonial: {
            background: "var(--testimonial-bg)"
          }
        },
        // Typography
        fontSize: {
          'xs': 'var(--font-size-xs)',
          'sm': 'var(--font-size-sm)',
          'base': 'var(--font-size-base)',
          'lg': 'var(--font-size-lg)',
          'xl': 'var(--font-size-xl)',
          '2xl': 'var(--font-size-2xl)',
          '3xl': 'var(--font-size-3xl)',
          '4xl': 'var(--font-size-4xl)',
          '5xl': 'var(--font-size-5xl)',
          '6xl': 'var(--font-size-6xl)',
          '7xl': 'var(--font-size-7xl)',
          '8xl': 'var(--font-size-8xl)'
        },
        fontWeight: {
          'normal': 'var(--font-weight-normal)',
          'medium': 'var(--font-weight-medium)',
          'semibold': 'var(--font-weight-semibold)',
          'bold': 'var(--font-weight-bold)',
          'extrabold': 'var(--font-weight-extrabold)'
        },
        lineHeight: {
          'tight': 'var(--line-height-tight)',
          'snug': 'var(--line-height-snug)',
          'normal': 'var(--line-height-normal)',
          'relaxed': 'var(--line-height-relaxed)',
          'loose': 'var(--line-height-loose)',
          'extra': 'var(--line-height-extra)',
          'super': 'var(--line-height-super)'
        },
        // Spacing
        spacing: {
          'xs': 'var(--spacing-xs)',
          'sm': 'var(--spacing-sm)',
          'md': 'var(--spacing-md)',
          'lg': 'var(--spacing-lg)',
          'xl': 'var(--spacing-xl)',
          '2xl': 'var(--spacing-2xl)',
          '3xl': 'var(--spacing-3xl)',
          '4xl': 'var(--spacing-4xl)',
          '5xl': 'var(--spacing-5xl)',
          '6xl': 'var(--spacing-6xl)'
        },
        // Border Radius
        borderRadius: {
          'xs': 'var(--radius-xs)',
          'sm': 'var(--radius-sm)',
          'md': 'var(--radius-md)',
          'lg': 'var(--radius-lg)',
          'xl': 'var(--radius-xl)',
          'full': 'var(--radius-full)'
        },
        // Font Family
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'manrope': ['Manrope', 'sans-serif'],
          'gilmer': ['Gilmer', 'sans-serif']
        }
      }
    },
    plugins: []
  };