import img from '../IMG-20201024-WA0024.jpg'

function Info() {
    return (
        <div className="info-container">
            <img src={img} alt="" className="info-image"/>
            <h2>Harsh Srivastav</h2>
            <p>Frontend Developer</p>
            <a href="#root">harsh.sriv</a>
            <button className="emailBtn"><i className="fa-solid fa-envelope"></i>  Email</button>
            <button className="linkedinBtn"><i className="fa-brands fa-linkedin"></i>  LinkedIn</button>
        </div>
    )
}

export default Info;