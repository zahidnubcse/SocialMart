import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProfileLink, platformIcons } from '../assets/assets';
import { useSelector } from 'react-redux';
import { ArrowLeft, ArrowUpRightFromSquare, CheckCircle2, ChevronLeftIcon, ChevronRightIcon, DollarSign, Loader2Icon } from 'lucide-react';

const ListingDetails = () => {
    const navigate = useNavigate();
    const currency = import.meta.env.VITE_CURRENCY || '$';

    const [listing, setListing] = useState(null)
    const profileLink = listing && getProfileLink(listing.platform, listing.username)

    const {listingId} = useParams()
    const {listings} = useSelector((state)=>state.listing)

    const [current, settCurrent] = useState(0)
    const images = listing?.images || []

    const prevSlide = ()=> settCurrent((prev)=> (
        prev === 0 ? images.length - 1 : prev - 1
    ))

    
    const nextSlide = ()=> settCurrent((prev)=> (
        prev === images.length - 1 ? 0 : prev + 1
    ))

    useEffect(()=>{
       const listing = listings.find((listing)=>listing.id === listingId);
       if(listing){
        setListing(listing)
       }
    },[listingId, listings])

    return listing ? (
        <div className='mx-auto min-h-screen px-6 md:px-16 lg:px-24 xl:px-32'>
             <button onClick={()=>navigate(-1)} className='flex items-center gap-2 text-slate-600 py-5'>
                <ArrowLeft className='size-4'/>Go to previous page
             </button>

             <div className='flex items-start max-md:flex-col gap-10'>

                {/*Listing info left.. */}
                <div className='flex-1 max-md:w-full'>
                   {/*top section */}
                   <div className='bg-white rounded-xl border border-gray-200 md-5'>

                    <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-4'>
                       <div className='flex items-center gap-3'>
                              <div className='p-2 rounded-xl'>
                                {platformIcons[listing.platform]}
                                <div>
                                    <h2 className='flex items-center gap-2 text-xl font-semibold text-gray-800'>{listing.title}
                                    <Link target='_blank' to={profileLink}>
                                        <ArrowUpRightFromSquare className='size-4 hover:text-indigo-500'/>
                                    </Link>
                                    </h2> 
                                    <p className='text-sm text-gray-500'>@{listing.username} . {listing.platform?.charAt(0).toUpperCase() +
                                        listing.platform?.slice(1)}
                                       
                                    </p>
                                    <div className='gap-2 flex mt-2'>
                                          {listing.verified &&(
                                            <span className='flex items-center text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md'>
                                                <CheckCircle2 className='w-3 h-3 mr-1'/>
                                                Verified
                                            </span>
                                          )}

                                          {listing.monetized &&(
                                            <span className='flex items-center text-xs bg-green-50 text-green-600 px-2 py-1 rounded-md'>
                                                <DollarSign className='w-3 h-3 mr-1'/>
                                                Monetized
                                            </span>
                                          )}
                                    </div>
                                </div>
                              </div>
                       </div>
                       <div className='text-right'>
                             <h3 className='text-2xl font-bold text-gray-800'>
                                {currency}
                                {listing.price?.toLocaleString()}
                             </h3>
                             <p className='text-sm text-gray-500'>
                                USD
                             </p>
                       </div>
                    </div>

                   </div>

                   {/*screenShot*/}
                   {images?.length > 0 && (
                    <div className='bg-white border rounded-xl border-b-gray-200 mt-5 overflow-hidden'>
                        <div className='p-4'>
                            <h4 className='font-semibold text-gray-800'>
                                Screenshots & proof
                            </h4>
                        </div>
                        {/*slider */}
                        <div className='relative w-full aspect-video overflow-hidden'>
                                 <div className='flex transition-transform duration-300 ease-in-out' style={{transform: `translateX(-${current * 100}%)`}}>
                                    {images.map((image, index)=>(
                                        <img src={image} key={index} alt="Listing Proof" className='w-full shrink-0' />
                                    ))}
                                 </div>

                                 {/*Navigation button */}
                                 <button onClick={prevSlide} className='absolute left-3 top-1/2 translate-y-1/2
                                 bg-white/70 hover:bg-white p-2 rounded-full shadow'>
                                    <ChevronLeftIcon className='w-5 h-5 text-gray-700'/>
                                 </button>

                                 <button onClick={nextSlide} className='absolute right-3 top-1/2 translate-y-1/2
                                 bg-white/70 hover:bg-white p-2 rounded-full shadow'>
                                    <ChevronRightIcon className='w-5 h-5 text-gray-700'/>
                                 </button>
                        </div>
                    </div>
                   )}
                </div>

                 {/*seller Info and details */}
                 <div className=''>

                 </div>
             </div>
        </div>
    ):
    (
        <div className='h-screen flex justify-center items-center'>
            <Loader2Icon className='size-7 animate-spin text-indigo-600'/>
        </div>
    )
};

export default ListingDetails;