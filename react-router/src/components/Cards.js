import React from "react";
 

const Cards = () => {
  return (
    <>
  <div className="flex w-full mt-10 justify-around flex-wrap"> 
    <div class="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
    <img src="https://source.unsplash.com/random/255x255/?2" alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
    <div class="flex flex-col justify-between p-6 space-y-8">
      <div class="space-y-2">
        <h2 class="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
        <p class="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
      </div>
      <button type="button" class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md   bg-black text-white">Read more</button>
    </div>
  </div>
  <div class="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
    <img src="https://source.unsplash.com/random/250x250/?2" alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
    <div class="flex flex-col justify-between p-6 space-y-8">
      <div class="space-y-2">
        <h2 class="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
        <p class="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
      </div>
      <button type="button" class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-black text-white">Read more</button>
    </div>
  </div>
  <div class="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
    <img src="https://source.unsplash.com/random/253x253/?2" alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
    <div class="flex flex-col justify-between p-6 space-y-8">
      <div class="space-y-2">
        <h2 class="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
        <p class="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
      </div>
      <button type="button" class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-black text-white">Read more</button>
    </div>
  </div>
  </div>
  </>
  
  );
};

export default Cards;