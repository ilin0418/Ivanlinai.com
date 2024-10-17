import './Contact.css'
export default function Contact() {

  return (
    <div className='contact'>
        <div className='map'>
        <iframe title="hojo" width="100%" height="300" frameborder="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Golisano%20College%20of%20Computing%20and%20Information%20Science+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        <div className='contact-info'>
          <h1>Contact Me</h1>
          <ul>
            <li><a href='https://www.linkedin.com/in/ivanlin0418/'>🔗 Linkedin </a></li>
            <li><a href='https://github.com/ivanlin0418' target='blank'>🔗 Github </a></li>
            <li><a href='https://www.instagram.com/derpy_rong/' target='blank'>🔗 Instagram </a></li>
            <li><a href='mailto:il9082@rit.edu'>📧 il9082@rit.edu</a></li>
            <li>📍 20 Lomb Memorial Dr<br/>Rochster, NY 14623</li>
          </ul>
        </div>
    </div>
  )
}
