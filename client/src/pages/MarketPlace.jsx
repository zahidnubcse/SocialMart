import { ArrowLeft, Filter, Verified } from 'lucide-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ListingCard from '../components/ListingCard';
import FilterSidebar from '../components/FilterSidebar';

const MarketPlace = () => {
    const navigate = useNavigate();
    const [showFilterPhone,setShowFilterPhone] = useState(false);
      const {listings} = useSelector(state=>state.listing)
      const [filters, setFilters] = useState({
        platform: null,
        maxPrice: 100000,
        minFollowers: 0,
        niche: null,
        Verified: false,
        monitized: false,
      })

      const filteredListings = listings.filter((listing)=>{
        return true
      })
    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex items-center justify-between text-slate-500'>
                <button className='flex items-center gap-2 py-5' onClick={()=>{navigate('/'); scrollTo(0,0)}}> <ArrowLeft className='size-4'/> Back to Home</button>
                <button className='flex sm:hidden items-center gap-2 py-5' onClick={()=>setShowFilterPhone(true)}> <Filter className='size-4'/> Filters</button>
            </div>

            {/*Right side */}
            <div className='relative flex items-start justify-between gap-8 pb-8'>
                    
                     <FilterSidebar setFilters={setFilters} filters={filters} setShowFilterPhone={setShowFilterPhone} showFilterPhone={showFilterPhone}/>
                    <div className='flex-1 grid xl:grid-cols-2 gap-4'>
                        {filteredListings.sort((a,b)=>a.featured ? -1 : b.featured ? 1 : 0).map((listing, index)=>(
                            <ListingCard listing={listing} key={index}/>
                        ))}
                    </div>
            </div>
        </div>
    );
};

export default MarketPlace;