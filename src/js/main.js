import '../css/input.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.getElementById('main-header')
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-sm', 'bg-light/90')
            header.classList.remove('bg-light/80')
        } else {
            header.classList.remove('shadow-sm', 'bg-light/90')
            header.classList.add('bg-light/80')
        }
    })

    // Hero Animation
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.to('.hero-content', {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2
    })
        .to('.hero-visual', {
            y: 0,
            opacity: 1,
            duration: 1,
        }, '-=0.6')

    // Section 2: Journey (Staggered Cards)
    gsap.to('.section-header', {
        scrollTrigger: {
            trigger: '#beneficios',
            start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8
    })

    gsap.to('.feature-card', {
        scrollTrigger: {
            trigger: '#beneficios',
            start: 'top 75%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2
    })

    // Section 3: Product (Space Reveal)
    const spaceTl = gsap.timeline({
        scrollTrigger: {
            trigger: '#espaco',
            start: 'top 70%',
        }
    })

    spaceTl.to('.space-visual', {
        x: 0,
        opacity: 1,
        duration: 1
    })
        .to('.space-content', {
            x: 0,
            opacity: 1,
            duration: 1
        }, '-=0.8')

    // Section 4: Pricing
    gsap.to('.section-header-pricing', {
        scrollTrigger: {
            trigger: '#planos',
            start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8
    })

    gsap.to('.pricing-card', {
        scrollTrigger: {
            trigger: '#planos',
            start: 'top 75%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2
    })

})
