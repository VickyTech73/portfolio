const Contact = () => {
    const bng_img = [
        '/images/icons/github-11-64.png',
        '/images/icons/mail-64.png',
        '/images/icons/phone-64.png',
        '/images/icons/whatsapp-64.png',
    ]
    return ( 
        <div id="contact" className="contact">
            <div className="talk">
                <h1 className="header">Hala Me 😉</h1>
                <p>Let's build something awesome together!</p>
           </div>    

        <div className="slides">
            <div id="g" className="slide">
                <a href="https://github.com/VickyTech73" target="blank">
                    <div className="i-cont"></div>
                    <p>VickyTech73.github.io</p>
                </a>
            </div>

            <div id="m" className="slide">
                <a href="mailto: agbozovictor73@gmail.com" target="blank">
                    <div className="i-cont"></div>
                    <p>agbozovictor73@gmail.com</p>
                </a>
            </div>

            <div id="p" className="slide">
                <a href="tel: +233547714953" target="blank">
                    <div className="i-cont"></div>
                    <p>+233 547714953</p>
                </a>
            </div>

            <div id="w" className="slide">
                <a href="tel: +233547714953" target="blank">
                    <div className="i-cont"></div>
                    <p>+233 547714953</p>
                </a>
            </div>
        </div>

        </div>
     );
}
 
export default Contact;