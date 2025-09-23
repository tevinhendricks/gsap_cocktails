import React from 'react'
import { openingHours, socials } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

export default function Contact() {
    
    useGSAP(() => {
        const titleSplit = new SplitText('#contact h2', {type: 'words'});

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut',
        })

        timeline.from(titleSplit.words, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.02,
        })
        .from('#contact h3, #contact p', {
            opacity: 0,
            yPercent: 100,
            stagger: 0.02,
        })
        .to("#f-right-leaf", {
            y: '-50',
            duration: 1,
            ease: 'power1.inOut',
        })
        .to("#f-left-leaf", {
            y: '-50',
            duration: 1,
            ease: 'power1.inOut',
        }, '<')

    })

    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
            <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
            <div className="content">
                <h2>Where to Find us</h2>

                <div>
                    <h3>Visit Our Bar</h3>
                    <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>Phone: 011 645 2523</p>
                    <p>Email: info@velvetpour.com</p>
                </div>

                <div>
                    <h3>Opening Hours</h3>
                    <p>{openingHours.map((time) => (
                        <p key={time.day}>{time.day}: {time.time}</p>
                    ))}</p>
                </div>

                <div>
                    <h3>Follow Us</h3>
                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                <img src={social.icon} alt={social.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
