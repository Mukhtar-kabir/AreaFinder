import './Hero.css'
import { CiSearch } from "react-icons/ci";
import profile from "/profile.jpg";
import { CiStar } from "react-icons/ci";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsDown } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-container">
        <h1>Find a place you
        will love to live!</h1>
        <p>See through the lenses of people who have
        lived or visited the neighbourhood you might
        have in mind.</p>
        <div className="search">
          <CiSearch className='icon' />
          <input type="text" placeholder='Enter Address' />
        </div>
          <button>Submit</button>
      </div>

      <div className="items">
        <div className="item">
          <div className="flex">
            <div className="image">
              <img src={profile} alt="image" />
              <div className="name">
                <h3>James T.</h3>
                <span>5 months</span>
              </div>
            </div>

            <div className="rate">
              <h4>Ikate, Lekki</h4>
              <div className="stars">
                <CiStar className='star' />
                <CiStar className='star' />
                <CiStar className='star' />
                <CiStar className='star' />
                <CiStar className='star' />
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reprehenderit maiores sit, corrupti dolorum tempora veritatis eveniet debitis, voluptatem odit est rerum, accusantium omnis molestiae eius! Eum quo iusto quam.</p>

          <div className="likes">
            <div className="like">
              <BsHandThumbsUp className='icon' />
              <span>24</span>
              <BsHandThumbsDown className='icon' />
              <span>02</span>
              <FaRegMessage className='icon' />
              <span>125</span>
            </div>

            <div className="network">
              <button>network</button>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="flex">
            <div className="image">
              <img src={profile} alt="image" />
              <div className="name">
                <h3>James T.</h3>
                <span>5 months</span>
              </div>
            </div>

            <div className="rate">
              <h4>Ikate, Lekki</h4>
              <div className="stars">
                <CiStar className='star' />
                <CiStar className='star' />
                <CiStar className='star' />
                <CiStar className='star' />
                <CiStar className='star' />
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reprehenderit maiores sit, corrupti dolorum tempora veritatis eveniet debitis, voluptatem odit est rerum, accusantium omnis molestiae eius! Eum quo iusto quam.</p>

          <div className="likes">
            <div className="like">
              <BsHandThumbsUp className='icon' />
              <span>24</span>
              <BsHandThumbsDown className='icon' />
              <span>02</span>
              <FaRegMessage className='icon' />
              <span>125</span>
            </div>

            <div className="network">
              <button>network</button>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="flex">
            <div className="image">
              <img src={profile} alt="image" />
              <div className="name">
                <h3>James T.</h3>
                <span>5 months</span>
              </div>
            </div>

            <div className="rate">
              <h4>Ikate, Lekki</h4>
              <div className="stars">
                 <CiStar className='star' />
                 <CiStar className='star' />
                 <CiStar className='star' />
                 <CiStar className='star' />
                 <CiStar className='star' />
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reprehenderit maiores sit, corrupti dolorum tempora veritatis eveniet debitis, voluptatem odit est rerum, accusantium omnis molestiae eius! Eum quo iusto quam.</p>

          <div className="likes">
            <div className="like">
              <BsHandThumbsUp className='icon' />
              <span>24</span>
              <BsHandThumbsDown className='icon' />
              <span>02</span>
              <FaRegMessage className='icon' />
              <span>125</span>
            </div>

            <div className="network">
              <button>network</button>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="flex">
            <div className="image">
              <img src={profile} alt="image" />
              <div className="name">
                <h3>James T.</h3>
                <span>5 months</span>
              </div>
            </div>

            <div className="rate">
              <h4>Ikate, Lekki</h4>
              <div className="stars">
                 <CiStar className='star' />
                 <CiStar className='star' />
                 <CiStar className='star' />
                 <CiStar className='star' />
                 <CiStar className='star' />
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reprehenderit maiores sit, corrupti dolorum tempora veritatis eveniet debitis, voluptatem odit est rerum, accusantium omnis molestiae eius! Eum quo iusto quam.</p>

          <div className="likes">
            <div className="like">
              <BsHandThumbsUp className='icon' />
              <span>24</span>
              <BsHandThumbsDown className='icon' />
              <span>02</span>
              <FaRegMessage className='icon' />
              <span>125</span>
            </div>

            <div className="network">
              <button>network</button>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="flex">
            <div className="image">
              <img src={profile} alt="image" />
              <div className="name">
                <h3>James T.</h3>
                <span>5 months</span>
              </div>
            </div>

            <div className="rate">
              <h4>Ikate, Lekki</h4>
              <div className="stars">
                 <CiStar className='star' />
                 <CiStar className='star' />
                 <CiStar className='star' />
                 <CiStar className='star' />
                 <CiStar className='star' />
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reprehenderit maiores sit, corrupti dolorum tempora veritatis eveniet debitis, voluptatem odit est rerum, accusantium omnis molestiae eius! Eum quo iusto quam.</p>

          <div className="likes">
            <div className="like">
              <BsHandThumbsUp className='icon' />
              <span>24</span>
              <BsHandThumbsDown className='icon' />
              <span>02</span>
              <FaRegMessage className='icon' />
              <span>125</span>
            </div>

            <div className="network">
              <button>network</button>
            </div>
          </div>
        </div>
        
        <div className="item">
          <div className="flex">
            <div className="image">
              <img src={profile} alt="image" />
              <div className="name">
                <h3>James T.</h3>
                <span>5 months</span>
              </div>
            </div>

            <div className="rate">
              <h4>Ikate, Lekki</h4>
              <div className="stars">
                 <CiStar className='star' />
                 <CiStar className='star' />
                 <CiStar className='star' />
                 <CiStar className='star' />
                 <CiStar className='star' />
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reprehenderit maiores sit, corrupti dolorum tempora veritatis eveniet debitis, voluptatem odit est rerum, accusantium omnis molestiae eius! Eum quo iusto quam.</p>

          <div className="likes">
            <div className="like">
              <BsHandThumbsUp className='icon' />
              <span>24</span>
              <BsHandThumbsDown className='icon' />
              <span>02</span>
              <FaRegMessage className='icon' />
              <span>125</span>
            </div>

            <div className="network">
              <button>network</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
