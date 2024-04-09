import './Review.css'
import { CiSearch } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import profile from "/profile.jpg";
import { FaRegBookmark } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import { TfiAngleRight } from "react-icons/tfi";
import { TbStarFilled } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsDown } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import { addReview } from '../../redux/areaFinderSlice';
import { useDispatch } from 'react-redux';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import { ToastContainer, toast } from "react-toastify";

const Review = () => {
    const userInfo = useSelector((state) => state.areaFinder.userInfo);
    const reviewing = useSelector((state) => state.areaFinder.reviews);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [reviewText, setReviewText] = useState('');

    const [reviews, setReviews] = useState(() => {
        const storedReviews = localStorage.getItem('reviews');
        return storedReviews ? JSON.parse(storedReviews) : [];
    });

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleSubmit = () => {
        const currentDate = new Date().toLocaleDateString();
        const newReview = {
            name: userInfo.name,
            profileImage: userInfo.profileImage,
            date: currentDate,
            rating: 4.0,
            content: reviewText,
            likes: {
              thumbsUp: 1224,
              thumbsDown: 4,
              messages: 24
            }
        };
        // dispatch(addReview(newReview));
        toast.success('Review added successfully');
        setReviews([...reviews, newReview]);
        setReviewText('');
        toggleModal();
      };

      const handleDeleteReview = (index) => {
        const updatedReviews = [...reviews];
        updatedReviews.splice(index, 1); // Remove the review at the specified index
        setReviews(updatedReviews); // Update the reviews state
    };

      const formatDate = (date) => {
        const today = new Date();
        const reviewDate = new Date(date);
        if (today.toDateString() === reviewDate.toDateString()) {
          return 'Today';
        } else {
          return reviewDate.toLocaleDateString();
        }
      };

      useEffect(() => {
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }, [reviews]);

  return (
    <div className='review'>
        <div className="back">
        <div className="input">
            <CiSearch />
            <input type="text" placeholder="Bonny and Clyde Street, Ajao Estate, Lagos" />
        </div>

        <div className="leave-review">
            <div className="leave">
                <p>Bonny and Clyde Street, Ajao Estate, Lagos</p>
                <span>"450" Reviews (People are raving about the selected location)</span>
            </div>

            <div className="buttons">
                <button onClick={toggleModal}>Leave a review</button>
                <span>
                    <FaRegBookmark className='icon' />
                </span>
                <span>
                    <AiOutlineShareAlt className='icon' />
                </span>
            </div>
        </div>

        <div className="mini-buttons">
            
            <button>Schools</button>
                        <button>Hospitals</button>
                        <button>Resort Park</button>
                        <button>Shopping Malls</button>
                        <button>Airport</button>
                        <button>Train Station</button>
                        <button>Nightlife</button>
                        <button>Public Wifi</button>
                        <button>Parking Lot</button>
                        <button>Security</button>
                        <button>Public Transport</button>
                        <button>Bus Station</button>
                        <button>Quiet</button>
                        <button className='button'><TfiAngleRight /></button>
             
        </div>
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-content">
                <h4>Review location</h4>
                <p>Bonny and Clyde Street, Ajao Estate, Lagos</p>
                <div className="dropdown">
                    <div className="select" onClick={toggleDropdown}>
                        <small>Select Amneties</small>
                        <IoIosArrowDown />
                    </div>
                    {showDropdown && (
                        <div className="dropdown-content">
                        <label><input type="checkbox" /> Parking Lot</label>
                        <label><input type="checkbox" /> Free Wifi</label>
                        <label><input type="checkbox" /> Parking Lot</label>
                        <label><input type="checkbox" /> Free Wifi</label>
                        <label><input type="checkbox" /> Parking Lot</label>
                        <label><input type="checkbox" /> Nightlife</label>
                        <label><input type="checkbox" /> Pet Store</label>
                        <label><input type="checkbox" /> Nightlife</label>
                        <label><input type="checkbox" /> Pet Store</label>
                        <label><input type="checkbox" /> Nightlife</label>
                        <label><input type="checkbox" /> Hospitals</label>
                        <label><input type="checkbox" /> Childcare</label>
                        <label><input type="checkbox" /> Hospitals</label>
                        <label><input type="checkbox" /> Childcare</label>
                        <label><input type="checkbox" /> Hospitals</label>
                        <label><input type="checkbox" /> Adult Home</label>
                        <label><input type="checkbox" /> Gym</label>
                        <label><input type="checkbox" /> Adult Home</label>
                        <label><input type="checkbox" /> Gym</label>
                        <label><input type="checkbox" /> Adult Home</label>
                        <label><input type="checkbox" /> Schools</label>
                        <label><input type="checkbox" /> Security</label>
                        <label><input type="checkbox" /> Schools</label>
                        <label><input type="checkbox" /> Security</label>
                        <label><input type="checkbox" /> Schools</label>
                        {/* Add more checkboxes as needed */}
                </div>
              )}
            </div>

                <p className='rate'>Rate location</p>
                <span>
                    <TbStarFilled className='star'/>
                    <TbStarFilled className='star'/>
                    <TbStarFilled className='star'/>
                    <TbStarFilled className='star'/>
                    <TbStarFilled className='star'/>
                </span>

                <p className='rate'>Write Review</p>
                <textarea name="" id="" cols="30" rows="8" value={reviewText} onChange={(e) => setReviewText(e.target.value)}></textarea>
                <div className='check'>
                    <input type="checkbox" id="anonymous" />
                    <label htmlFor="anonymous">Post as anonymous</label>
                </div>

                <div className="two-button">
                    <button style={{ opacity: reviewText ? '1' : '0.5', backgroundColor: reviewText ? '#3366FF' : '#85a1f7' }} disabled={!reviewText.trim()} onClick={handleSubmit}>Submit</button>
                    <button onClick={toggleModal}>Cancel</button>
                </div>
                <button className="modal-close" onClick={toggleModal}>&times;</button>
              </div>
            </div>
          </div>
        )}

        <div className="review-sections">
            <div className="review-section">
            {reviews.length === 0 ? (
                <div className='noReview'>
                    <MdDeleteForever className='delete' />
                    <p>No Reviews yet!</p>
                </div>
    ) : (
        reviews.map((review, index) => (
            <div className="review-section" key={index}>
                <div className="top">
                    <div className="image">
                        <img src={userInfo.image} alt="" />
                        <h3>{userInfo.name}.</h3>
                        <span>{formatDate(review.date)}</span>
                    </div>
                    <div className="rating">
                        <TbStarFilled className='icon' />
                        <span>{review.rating}</span>
                    </div>
                </div>
                <p>{review.content}</p>
                <div className="likes">
                    <div className="like">
                        <span>
                            <BsHandThumbsUp />
                            {review.likes?.thumbsUp}
                        </span>
                        <span>
                            <BsHandThumbsDown />
                            {review.likes.thumbsDown}
                        </span>
                        <span>
                            <FaRegMessage />
                            {review.likes.messages}
                        </span>
                    </div>
                </div>
                <button onClick={() => handleDeleteReview(index)}>Delete Review</button>
            </div>
        ))
    )}
            </div>
        </div>
        <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Review;

// import './Review.css'
// import { CiSearch } from "react-icons/ci";
// import { CiStar } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import profile from "/profile.jpg";
// import { FaRegBookmark } from "react-icons/fa";
// import { AiOutlineShareAlt } from "react-icons/ai";
// import { TfiAngleRight } from "react-icons/tfi";
// import { TbStarFilled } from "react-icons/tb";
// import { IoIosArrowDown } from "react-icons/io";
// import { BsHandThumbsUp } from "react-icons/bs";
// import { BsHandThumbsDown } from "react-icons/bs";
// import { FaRegMessage } from "react-icons/fa6";
// import { useState, useEffect } from 'react';
// import { addReview } from '../../redux/areaFinderSlice';
// import { useDispatch } from 'react-redux';

// const Review = () => {
//     const userInfo = useSelector((state) => state.areaFinder.userInfo);
//     const reviews = useSelector((state) => state.areaFinder.reviews);
//     const dispatch = useDispatch();

//     const [showModal, setShowModal] = useState(false);
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [reviewText, setReviewText] = useState('');

//     const toggleModal = () => {
//         setShowModal(!showModal);
//     };

//     const toggleDropdown = () => {
//         setShowDropdown(!showDropdown);
//     };

//     const handleSubmit = () => {
//         const currentDate = new Date().toLocaleDateString();
//         // Create a new review object
//         const newReview = {
//             name: userInfo.name,
//             profileImage: userInfo.profileImage,
//             date: currentDate,
//             rating: 4.0,
//             content: reviewText,
//             likes: {
//               thumbsUp: 0,
//               thumbsDown: 0,
//               messages: 0
//             }
//         };
//         dispatch(addReview(newReview));
//         setReviewText('');
//         toggleModal();
//     };

//     const formatDate = (date) => {
//         const today = new Date();
//         const reviewDate = new Date(date);
//         if (today.toDateString() === reviewDate.toDateString()) {
//           return 'Today';
//         } else {
//           return reviewDate.toLocaleDateString();
//         }
//     };

//     return (
//         <div className='review'>
//             <div className="input">
//                 <CiSearch />
//                 <input type="text"  className="placeholder" placeholder="Bonny and Clyde Street, Ajao Estate, Lagos" />
//             </div>

//             <div className="leave-review">
//                 <div className="leave">
//                     <p>Bonny and Clyde Street, Ajao Estate, Lagos</p>
//                     <span>"450" Reviews (People are raving about the selected location)</span>
//                 </div>

//                 <div className="buttons">
//                     <button onClick={toggleModal}>Leave a review</button>
//                     <span>
//                         <FaRegBookmark />
//                     </span>
//                     <span>
//                         <AiOutlineShareAlt />
//                     </span>
//                 </div>
//             </div>

//             <div className="mini-buttons">
//                 <button>Schools</button>
//                 <button>Hospitals</button>
//                 <button>Resort Park</button>
//                 <button>Shopping Malls</button>
//                 <button>Airport</button>
//                 <button>Train Station</button>
//                 <button>Nightlife</button>
//                 <button>Public Wifi</button>
//                 <button>Parking Lot</button>
//                 <button>Security</button>
//                 <button>Public Transport</button>
//                 <button>Bus Station</button>
//                 <button>Quiet</button>
//                 <button className='button'><TfiAngleRight /></button>
//             </div>

//             {showModal && (
//               <div className="modal-overlay">
//                 <div className="modal">
//                   <div className="modal-content">
//                     <h4>Review location</h4>
//                     <p>Bonny and Clyde Street, Ajao Estate, Lagos</p>
//                     <div className="dropdown">
//                         <div className="select" onClick={toggleDropdown}>
//                             <small>Select Amenities</small>
//                             <IoIosArrowDown />
//                         </div>
//                         {showDropdown && (
//                             <div className="dropdown-content">
//                                 <label><input type="checkbox" /> Parking Lot</label>
//                                 <label><input type="checkbox" /> Free Wifi</label>
//                                 {/* Add more checkboxes as needed */}
//                             </div>
//                         )}
//                     </div>

//                     <p className='rate'>Rate location</p>
//                     <span>
//                         <TbStarFilled className='star'/>
//                         <TbStarFilled className='star'/>
//                         <TbStarFilled className='star'/>
//                         <TbStarFilled className='star'/>
//                         <TbStarFilled className='star'/>
//                     </span>

//                     <p className='rate'>Write Review</p>
//                     <textarea name="" id="" cols="30" rows="8" value={reviewText} onChange={(e) => setReviewText(e.target.value)}></textarea>
//                     <div className='check'>
//                         <input type="checkbox" id="anonymous" />
//                         <label htmlFor="anonymous">Post as anonymous</label>
//                     </div>

//                     <div className="two-button">
//                         <button style={{ opacity: reviewText ? '1' : '0.5', backgroundColor: reviewText ? '#3366FF' : '#85a1f7' }} disabled={!reviewText.trim()} onClick={handleSubmit}>Submit</button>
//                         <button onClick={toggleModal}>Cancel</button>
//                     </div>
//                     <button className="modal-close" onClick={toggleModal}>Close Modal</button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="review-sections">
//                 <div className="review-section">
//                     {Array.isArray(reviews) ? (

//                         reviews.map((review, index) => (
//                             <div className="review-section" key={index}>
//                                 <div className="top">
//                                     <div className="image">
//                                         <img src={userInfo.profileImage} alt="" />
//                                         <h3>{userInfo.name}.</h3>
//                                         <span>{formatDate(review.date)}</span>
//                                     </div>
//                                     <div className="rating">
//                                         <TbStarFilled className='icon' />
//                                         <span>{review.rating}</span>
//                                     </div>
//                                 </div>
//                                 <p>{review.content}</p>
//                                 <div className="likes">
//                                     <div className="like">
//                                         <span>
//                                             <BsHandThumbsUp />
//                                             {review.likes?.thumbsUp}
//                                         </span>
//                                         <span>
//                                             <BsHandThumbsDown />
//                                             {review.likes.thumbsDown}
//                                         </span>
//                                         <span>
//                                             <FaRegMessage />
//                                             {review.likes.messages}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No reviews found.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Review;

