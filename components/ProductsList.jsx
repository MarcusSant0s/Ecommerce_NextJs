import React from 'react'

const ProductsList = () => {
  return (
    <div>
      {/* Container */} <div className="mx-auto"> {/* Main Content */} <div className="flex space-x-8"> {/* Sidebar Filters */} <div className="w-2/6 px-2 md:px-10"> {/* Header */} <div className="mb-6 py-4 flex flex-col items-start md:flex-row md:justify-between border-b border-gray-200">
      <p className="text-xl font-bold">Filters</p>
          <button>Clear all</button>
        </div> {/* Search Filter */} <div className="flex w-full mb-6 md:mb-10 md:px-6 px-2 items-center border border-gray-400 rounded-md">
          <div className="mr-1 md:mr-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.0005 14.0005L10.5359 10.5359M10.5359 10.5359C11.4736 9.59814 12.0004 8.32632 12.0004 7.00019C12.0004 5.67406 11.4736 4.40224 10.5359 3.46452C9.59814 2.5268 8.32632 2 7.00019 2C5.67406 2 4.40224 2.5268 3.46452 3.46452C2.5268 4.40224 2 5.67406 2 7.00019C2 8.32632 2.5268 9.59814 3.46452 10.5359C4.40224 11.4736 5.67406 12.0004 7.00019 12.0004C8.32632 12.0004 9.59814 11.4736 10.5359 10.5359Z" stroke="#9CA3AF" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <input type="text" placeholder="Search" className="py-2 w-full text-sm md:text-base rounded-md focus:outline-none placeholder:text-gray-500" />
        </div> {/* Categories Filter */} <div className="pb-3 md:pb-6 border-b border-gray-100 mb-3 md:mb-6">
          <p className="font-bold mb-6">Categories</p>
          <div className="flex flex-wrap gap-2">
            <button className="p-2 gap-1 md:gap-3 text-sm md:text-base flex items-center rounded-md bg-gray-100 font-bold">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H16.875C17.2065 16.875 17.5245 16.7433 17.7589 16.5089C17.9933 16.2745 18.125 15.9565 18.125 15.625V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125V3.125ZM3.125 4.375H16.875V7.5H3.125V4.375ZM16.875 15.625H8.75V8.75H16.875V15.625Z" fill="black" />
              </svg> Design
            </button>
            <button className="p-2 gap-1 md:gap-3 text-sm md:text-base flex items-center rounded-md bg-gray-100 font-bold">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5775 1.79688C15.9134 1.79688 14.0384 2.71875 12.0228 4.52344C10.6087 5.78906 9.39778 7.23437 8.56185 8.32812C7.86068 8.11471 7.1193 8.0684 6.39703 8.19291C5.67476 8.31741 4.99167 8.60928 4.40243 9.04513C3.81319 9.48098 3.33417 10.0487 3.00371 10.7029C2.67324 11.3571 2.50051 12.0796 2.49935 12.8125C2.49935 15.25 1.23372 16.3359 1.17122 16.3906C1.06944 16.4693 0.99555 16.5785 0.960398 16.7022C0.925246 16.826 0.930682 16.9577 0.975909 17.0781C1.01587 17.2017 1.09426 17.3093 1.19967 17.3852C1.30507 17.4611 1.43197 17.5013 1.56185 17.5H7.18685C7.91977 17.4988 8.64223 17.3261 9.29642 16.9956C9.95062 16.6652 10.5184 16.1862 10.9542 15.5969C11.3901 15.0077 11.6819 14.3246 11.8064 13.6023C11.9309 12.88 11.8846 12.1387 11.6712 11.4375C12.765 10.6016 14.2103 9.39062 15.4759 7.97656C17.2806 5.96094 18.2025 4.08594 18.2025 2.42187C18.2025 2.25611 18.1366 2.09714 18.0194 1.97993C17.9022 1.86272 17.7432 1.79688 17.5775 1.79688V1.79688ZM9.7181 8.875C9.94466 8.58594 10.2103 8.25781 10.515 7.89844C11.1403 8.32063 11.6787 8.85904 12.1009 9.48437C11.7415 9.78906 11.4134 10.0547 11.1243 10.2812C10.7627 9.71639 10.283 9.23662 9.7181 8.875V8.875ZM13.0462 8.64844C12.5788 7.99344 12.0059 7.42056 11.3509 6.95312C12.8822 5.29687 14.9447 3.48437 16.8822 3.11719C16.515 5.05469 14.7025 7.11719 13.0462 8.64844V8.64844Z" fill="black" />
              </svg> Illustration
            </button>
            <button className="p-2 gap-1 md:gap-3 text-sm md:text-base flex items-center rounded-md bg-gray-100 font-bold">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.1263 10.9377C8.1263 11.1231 8.07131 11.3044 7.9683 11.4586C7.86528 11.6127 7.71887 11.7329 7.54756 11.8038C7.37626 11.8748 7.18775 11.8934 7.0059 11.8572C6.82404 11.821 6.65699 11.7317 6.52588 11.6006C6.39477 11.4695 6.30548 11.3025 6.26931 11.1206C6.23314 10.9388 6.2517 10.7503 6.32266 10.5789C6.39362 10.4076 6.51378 10.2612 6.66795 10.1582C6.82212 10.0552 7.00338 10.0002 7.1888 10.0002C7.43744 10.0002 7.67589 10.099 7.85171 10.2748C8.02752 10.4506 8.1263 10.6891 8.1263 10.9377ZM12.8138 10.0002C12.6284 10.0002 12.4471 10.0552 12.2929 10.1582C12.1388 10.2612 12.0186 10.4076 11.9477 10.5789C11.8767 10.7503 11.8581 10.9388 11.8943 11.1206C11.9305 11.3025 12.0198 11.4695 12.1509 11.6006C12.282 11.7317 12.449 11.821 12.6309 11.8572C12.8128 11.8934 13.0013 11.8748 13.1726 11.8038C13.3439 11.7329 13.4903 11.6127 13.5933 11.4586C13.6963 11.3044 13.7513 11.1231 13.7513 10.9377C13.7513 10.6891 13.6525 10.4506 13.4767 10.2748C13.3009 10.099 13.0624 10.0002 12.8138 10.0002ZM18.181 11.2502C18.0164 11.3238 17.8378 11.3611 17.6575 11.3596C17.3722 11.3602 17.0958 11.2606 16.8763 11.0783V14.3752C16.8763 15.204 16.5471 15.9989 15.961 16.5849C15.375 17.171 14.5801 17.5002 13.7513 17.5002H6.2513C5.42249 17.5002 4.62764 17.171 4.04159 16.5849C3.45554 15.9989 3.1263 15.204 3.1263 14.3752V11.0783C2.90683 11.2606 2.63035 11.3602 2.34505 11.3596C2.16474 11.3611 1.98623 11.3238 1.82161 11.2502C1.56406 11.1365 1.35314 10.9381 1.22383 10.688C1.09452 10.4379 1.05459 10.1511 1.11067 9.87521L2.39192 3.03927C2.42413 2.87217 2.48992 2.71333 2.5853 2.57239C2.68068 2.43145 2.80367 2.31133 2.94683 2.2193C3.08998 2.12727 3.25032 2.06525 3.41814 2.03699C3.58596 2.00873 3.75777 2.01483 3.92317 2.0549L8.20442 3.12521H11.7982L16.0794 2.0549C16.2448 2.01483 16.4166 2.00873 16.5844 2.03699C16.7523 2.06525 16.9126 2.12727 17.0558 2.2193C17.1989 2.31133 17.3219 2.43145 17.4173 2.57239C17.5127 2.71333 17.5785 2.87217 17.6107 3.03927L18.8919 9.87521C18.948 10.1511 18.9081 10.4379 18.7788 10.688C18.6494 10.9381 18.4385 11.1365 18.181 11.2502V11.2502ZM15.6263 14.3752V9.53146L11.5716 4.37521H8.43098L4.3763 9.53146V14.3752C4.37835 14.8719 4.57656 15.3476 4.92774 15.6988C5.27893 16.0499 5.75465 16.2482 6.2513 16.2502H9.37629V15.258L8.30598 14.1955C8.20632 14.0741 8.15539 13.9199 8.16309 13.763C8.1708 13.6061 8.23659 13.4577 8.34768 13.3466C8.45876 13.2355 8.60719 13.1697 8.7641 13.162C8.92101 13.1543 9.07517 13.2052 9.19661 13.3049L10.0013 14.1174L10.806 13.3049C10.9274 13.2052 11.0816 13.1543 11.2385 13.162C11.3954 13.1697 11.5438 13.2355 11.6549 13.3466C11.766 13.4577 11.8318 13.6061 11.8395 13.763C11.8472 13.9199 11.7963 14.0741 11.6966 14.1955L10.6263 15.258V16.2502H13.7513C14.2479 16.2482 14.7237 16.0499 15.0748 15.6988C15.426 15.3476 15.6242 14.8719 15.6263 14.3752V14.3752Z" fill="black" />
              </svg> Icons
            </button>
            <button className="p-2 gap-1 md:gap-3 text-sm md:text-base flex items-center rounded-md bg-gray-100 font-bold">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9609 5.53164C17.9589 5.53164 17.9569 5.53082 17.9554 5.52936C17.954 5.52789 17.9531 5.5259 17.9531 5.52383C17.8402 5.33158 17.6785 5.17257 17.4844 5.06289L10.6094 1.19571C10.4231 1.09171 10.2133 1.03711 10 1.03711C9.78667 1.03711 9.57689 1.09171 9.39063 1.19571L2.51563 5.06289C2.32151 5.17257 2.1598 5.33158 2.04688 5.52383C2.04688 5.5259 2.04606 5.52789 2.04459 5.52936C2.04313 5.53082 2.04114 5.53164 2.03907 5.53164V5.54727C1.93106 5.72929 1.87436 5.93717 1.87501 6.14883V13.852C1.8754 14.0747 1.93492 14.2933 2.04747 14.4854C2.16002 14.6776 2.32158 14.8364 2.51563 14.9457L9.39063 18.8129C9.56371 18.9073 9.75615 18.9608 9.95313 18.9691H10.0625C10.2545 18.9606 10.4418 18.9071 10.6094 18.8129L17.4844 14.9457C17.6784 14.8364 17.84 14.6776 17.9525 14.4854C18.0651 14.2933 18.1246 14.0747 18.125 13.852V6.14883C18.1261 5.93218 18.0695 5.71913 17.9609 5.53164ZM10 2.28164L16.2266 5.78164L13.8359 7.14102L7.53126 3.66446L10 2.28164ZM10.0703 9.28164L3.78126 5.78164L6.25001 4.39102L12.5625 7.86758L10.0703 9.28164ZM10.6328 17.3676L10.6953 10.3676L13.2031 8.93789V11.9145C13.2031 12.0802 13.269 12.2392 13.3862 12.3564C13.5034 12.4736 13.6624 12.5395 13.8281 12.5395C13.9939 12.5395 14.1529 12.4736 14.2701 12.3564C14.3873 12.2392 14.4531 12.0802 14.4531 11.9145V8.22696L16.875 6.85196V13.852L10.6328 17.3676Z" fill="black" />
              </svg> Plugins
            </button>
            <button className="p-2 gap-1 md:gap-3 text-sm md:text-base flex items-center rounded-md bg-gray-100 font-bold">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.8261 11.9528L16.3261 7.83564C16.2117 7.52515 15.9789 7.27267 15.6787 7.13354C15.3784 6.99442 15.0353 6.98 14.7245 7.09346L10.0448 8.79658L10.9042 3.89033C10.9337 3.72839 10.931 3.5622 10.8961 3.40132C10.8613 3.24044 10.795 3.08802 10.7011 2.95283C10.5105 2.68239 10.2217 2.49731 9.89636 2.43721L5.58387 1.67939C5.25783 1.62479 4.9234 1.70073 4.65292 1.8908C4.38244 2.08086 4.19766 2.36977 4.13855 2.69502L2.24793 13.4138C2.16756 13.8731 2.17936 14.3437 2.28264 14.7984C2.38591 15.2531 2.5786 15.6827 2.84949 16.0622C3.11059 16.4335 3.44359 16.7486 3.82874 16.9889C4.21389 17.2291 4.64336 17.3895 5.09168 17.4606C5.26512 17.485 5.43997 17.4981 5.61512 17.4997H16.5604C16.8919 17.4997 17.2099 17.368 17.4443 17.1336C17.6787 16.8992 17.8104 16.5812 17.8104 16.2497V12.8356C17.925 12.5535 17.9306 12.2388 17.8261 11.9528ZM5.62293 14.9997C5.43751 14.9997 5.25625 14.9447 5.10208 14.8417C4.94791 14.7387 4.82775 14.5923 4.75679 14.421C4.68583 14.2497 4.66727 14.0612 4.70344 13.8793C4.73962 13.6975 4.8289 13.5304 4.96001 13.3993C5.09113 13.2682 5.25817 13.1789 5.44003 13.1427C5.62189 13.1065 5.81039 13.1251 5.98169 13.1961C6.153 13.267 6.29942 13.3872 6.40243 13.5414C6.50544 13.6955 6.56043 13.8768 6.56043 14.0622C6.56043 14.3108 6.46166 14.5493 6.28584 14.7251C6.11003 14.9009 5.87157 14.9997 5.62293 14.9997ZM16.5604 16.2497H9.66199L16.5604 13.7419V16.2497ZM8.86512 15.2106C8.92845 15.0303 8.97551 14.8447 9.00574 14.656L9.7948 10.2185L15.1542 8.26533L16.6464 12.3747L8.86512 15.2106Z" fill="black" />
              </svg> Color Palette
            </button>
          </div>
        </div> {/* Rating Filter */} <div className="pb-3 md:pb-6 border-b border-gray-100 mb-3 md:mb-6">
          <p className="font-bold mb-6">Rating</p>
          <div className="flex flex-col md:flex-row gap-2">
            <button className="w-16 h-11 bg-gray-100 font-bold rounded-md"> 1 </button>
            <button className="w-16 h-11 bg-gray-100 font-bold rounded-md"> 2 </button>
            <button className="w-16 h-11 bg-gray-100 font-bold rounded-md"> 3 </button>
            <button className="w-16 h-11 bg-gray-100 font-bold rounded-md"> 4 </button>
            <button className="w-16 h-11 bg-gray-100 font-bold rounded-md"> 5 </button>
          </div>
        </div> {/* Filter One */} <div className="pb-3 md:pb-6 border-b border-gray-100 mb-3 md:mb-6">
          <div className="flex justify-between items-center mb-6">
            <p className="font-bold">Filter One</p>
            <button>Clear</button>
          </div>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox mr-2 md:h-5 md:w-5 bg-gray-100" />
              <span className="text-sm md:text-base">Option One</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox mr-2 md:h-5 md:w-5 bg-gray-100" />
              <span className="text-sm md:text-base">Option Two</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox mr-2 md:h-5 md:w-5 bg-gray-100" />
              <span className="text-sm md:text-base">Option Three</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox mr-2 md:h-5 md:w-5 bg-gray-100" />
              <span className="text-sm md:text-base">Option Four</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox mr-2 md:h-5 md:w-5 bg-gray-100" />
              <span className="text-sm md:text-base">Option Five</span>
            </label>
          </div>
        </div> {/* Filter Two */} <div>
          <div className="flex justify-between items-center mb-6">
            <p className="font-bold">Filter Two</p>
            <button>Clear</button>
          </div>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="filterTwo" className="form-radio mr-2 md:h-5 md:w-5" />
              <span className="text-sm md:text-base">All</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="filterTwo" className="form-radio mr-2 md:h-5 md:w-5" />
              <span className="text-sm md:text-base">Option One</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="filterTwo" className="form-radio mr-2 md:h-5 md:w-5" />
              <span className="text-sm md:text-base">Option Two</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="filterTwo" className="form-radio mr-2 md:h-5 md:w-5" />
              <span className="text-sm md:text-base">Option Three</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="filterTwo" className="form-radio mr-2 md:h-5 md:w-5" />
              <span className="text-sm md:text-base">Option Four</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="filterTwo" className="form-radio mr-2 md:h-5 md:w-5" />
              <span className="text-sm md:text-base">Option Five</span>
            </label>
          </div>
        </div>
      </div> {/* Product List */} <div className="w-4/6 p-2 md:p-6  rounded-md flex items-center justify-center bg-gray-100">
        <div className="border rounded-md border-dashed w-full h-full border-gray-400 flex items-center justify-center">
          <p className="text-gray-400 font-bold">Product List</p>
        </div>
      </div>
    </div>
  </div>

       
    </div>
  )
}

export default ProductsList
