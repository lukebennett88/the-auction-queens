+++
title = "Online absentee bid form"
+++

<form class="w-full max-w-md" name="bid-form" action="/success/" method="POST">
  <h2>Contact information</h2>

  <!-- NAME -->
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey" id="first-name" type="text" placeholder="Elizabeth">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey" id="last-name" type="text" placeholder="Windsor">
    </div>
  </div>

  <!-- ADDRESS -->
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-2/5 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="city">
        City
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey" id="city" type="text" placeholder="The Auction Queens
    <div class="w-full md:w-2/5 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-grey-lighter border shadow-inner text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white border-grey" id="state">
          <option>New South Wales</option>
          <option>Victoria</option>
          <option>Queensland</option>
          <option>Western Australia</option>
          <option>South Australia</option>
          <option>Tasmania</option>
          <option>Australian Capital Territory</option>
          <option>Northern Territory</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="postcode">
        Postcode
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey" id="postcode" type="text" placeholder="2444">
    </div>
  </div>

  <!-- CONTACT METHODs -->
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="phone">
        Phone
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey" id="phone" type="text" placeholder="0400 000 000">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="email">
        Email
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey" id="email" type="email" placeholder="lizzy@england4lyf.com">
    </div>
  </div>

  <h2>Bids</h2>

  <!-- FIRST LOT -->
  <div class="flex flex-wrap -mx-3 mb-4">
    <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
      <label class="block font-bold mb-2 text-grey-darker text-xs tracking-wide uppercase" for="lot-1">
        Lot number
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey" id="lot-1" type="text">
    </div>
    <div class="w-full md:w-3/5 px-3 mb-6 md:mb-0">
      <label class="block font-bold mb-2 text-grey-darker text-xs tracking-wide uppercase" for="description-1">
        Lot description
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey" id="description-1" type="text">
    </div>
    <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
      <label class="block font-bold mb-2 text-grey-darker text-xs tracking-wide uppercase" for="bid-1">
        Bid
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey" id="bid-1" type="text">
    </div>
  </div>


  <!-- SECOND LOT -->
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
      <label class="block font-bold md:hidden mb-2 text-grey-darker text-xs tracking-wide uppercase" for="lot-2">
        Lot number
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey"
      id="lot-2" type="text">
    </div>
    <div class="w-full md:w-3/5 px-3 mb-6 md:mb-0">
      <label class="block font-bold md:hidden mb-2 text-grey-darker text-xs tracking-wide uppercase" for="description-2">
        Lot description
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey"
      id="description-2" type="text">
    </div>
    <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
      <label class="block font-bold md:hidden mb-2 text-grey-darker text-xs tracking-wide uppercase" for="bid-2">
        Bid
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey" id="bid-2" type="text">
    </div>
  </div>

  <!-- THIRD LOT -->
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
      <label class="block font-bold md:hidden mb-2 text-grey-darker text-xs tracking-wide uppercase" for="lot-3">
        Lot number
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey"
      id="lot-3" type="text">
    </div>
    <div class="w-full md:w-3/5 px-3 mb-6 md:mb-0">
      <label class="block font-bold md:hidden mb-2 text-grey-darker text-xs tracking-wide uppercase" for="description-3">
        Lot description
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey"
      id="description-3" type="text">
    </div>
    <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
      <label class="block font-bold md:hidden mb-2 text-grey-darker text-xs tracking-wide uppercase" for="bid-3">
        Bid
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey" id="bid-3" type="text">
    </div>
  </div>

  <!-- FOURTH LOT -->
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
      <label class="block font-bold md:hidden mb-2 text-grey-darker text-xs tracking-wide uppercase" for="lot-4">
        Lot number
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey"
      id="lot-4" type="text">
    </div>
    <div class="w-full md:w-3/5 px-3 mb-6 md:mb-0">
      <label class="block font-bold md:hidden mb-2 text-grey-darker text-xs tracking-wide uppercase" for="description-4">
        Lot description
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey"
      id="description-4" type="text">
    </div>
    <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
      <label class="block font-bold md:hidden mb-2 text-grey-darker text-xs tracking-wide uppercase" for="bid-4">
        Bid
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey" id="bid-4" type="text">
    </div>
  </div>

  <!-- FIFTH LOT -->
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
      <label class="block font-bold md:hidden mb-2 text-grey-darker text-xs tracking-wide uppercase" for="lot-5">
        Lot number
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey"
      id="lot-5" type="text">
    </div>
    <div class="w-full md:w-3/5 px-3 mb-6 md:mb-0">
      <label class="block font-bold md:hidden mb-2 text-grey-darker text-xs tracking-wide uppercase" for="description-5">
        Lot description
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey"
      id="description-5" type="text">
    </div>
    <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
      <label class="block font-bold md:hidden mb-2 text-grey-darker text-xs tracking-wide uppercase" for="bid-5">
        Bid
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey" id="bid-5" type="text">
    </div>
  </div>

  <!-- TERMS -->
  <h2>Terms & Conditions</h2>
  <div class="appearance-none block w-full bg-grey-lighter text-grey-darker border shadow-inner rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border-grey
 h-64 overflow-y-scroll pt-3 pr-3 scrolling-touch shadow-inner text-sm">
    <ol class="m-0 pl-4">
    <li><p>Payment methods are to be by cash or EFTPOS. Any other methods must be approved of by the The Auction Queens before your tender can be accepted.</p></li>
    <li><p>The Bidder agrees to pay a Buyer’s Premium of 11% plus a $3.30 per lot processing fee.</p></li>
    <li><p>A Bid, once submitted, cannot be withdrawn and is irrevocable.</p></li>
    <li><p>If a Bid is accepted within a period of 7 days from the close of Bids, or if a price is subsequently negotiated it then becomes a legally binding contract to purchase as per these terms and conditions.</p></li>
    <li><p>All Bids must be in whole dollars. All Bids submitted with cents will be rounded up to the nearest whole dollar.</p></li>
    <li><p>The Auction Queens, at its sole and absolute discretion, may decide to rule any Bid void.</p></li>
    <li><p>It is the Bidder’s responsibility to enquire as to whether or not their Bid has been successful.</p></li>
    <li><p>In the case of a tied Bid, preference will be given to the lowest Bid Sheet number. Bid Sheets are handed out in Bid Sheet number order.</p></li>
    <li><p>Bids submitted after close of sale may or may not be accepted at the sole discretion of the The Auction Queens.</p></li>
    <li><p>It is the responsibility of the Bidder to ensure before submitting a Bid that the goods are suitable for the purpose for which they are intended. No allowance will be made for unsuitability after a Bid has been submitted.</p></li>
    <li><p>Any refunds will be issued at the sole discretion of the The Auction Queens and must be processed within 36 hours of purchase.</p></li>
    <li><p>Descriptions of goods offered for sale are based on descriptions supplied by the Seller. Under no circumstances shall the The Auction Queens, it’s employees or agents be liable for any misdescription, error or omission of a description be it in a catalogue, advertisement, brochure or any other medium.</p></li>
    <li><p>In the case of a dispute, any remedies or actions taken by a Seller, Buyer, Bidder or any other party shall lie against the Seller, Buyer, Bidder or other party, and under no circumstances shall any remedies or actions lie against the The Auction Queens, it’s employees or agents.</p></li>
    <li><p>The title of goods and risk of goods is in the Seller’s name until payment has been made by the Buyer, at which time title and risk are transferred to the Purchaser. At no time is title or risk in the The Auction Queens name.</p></li>
    <li><p>The The Auction Queens takes no responsibilities for goods left in-store after payment has been made.</p></li>
    <li><p>If goods are not paid for by the deadline displayed at the place of viewing, The Auction Queens, without giving notice to the Bidder may do any or all of the following:</p>
    <p>a) Charge a storage fee</p>
    <p>b) Declare the agreement void, contact another Bidder and inform them that their Bid has been successful and take legal action against the original Bidder for the difference.</p>
    <p>c) Take legal action against the Bidder to enforce this contract.</p></li>
  </ol>
  </div>

  <!-- CHECKBOX -->
  <div class="mb-6 w-full">
    <input name="agree" type="checkbox" value="agree">
    <label class="px-1">
      I agree to the <strong class="text-grey-darker">Terms &amp; Conditions</strong>
    </label>
  </div>

  <!-- HONEYPOT -->
  <div class="hidden">
    <label>
      Don’t fill this out if you're human:
    </label>
    <input name="bot-field">
  </div>

  <!-- SUBMIT BUTTON -->
  <div class="text-center">
    <button class="bg-indigo-light border px-6 py-3 rounded-lg shadow-lg hover:shadow-inner text-white text-2xl" name="signup" value="Sign up">Place a bid</button>
  </div>

</form>

<!--
  *The Auction Queens offers this service as a convenience to
buyers who are unable to attend the auction and will not be held
responsible for errors or failure to execute bids.

*Lots will be bought as reasonably as is allowed by reserves and
other bids, if any, and in accordance with the terms and conditions of
Auction Sale.

*A Buyer’s Premium of 15.00% (GST inclusive) will be added to the
hammer price of all lots purchased.

*All lots must be paid for and collected by 4pm on the day following
the auction. If not picked up by this time, storage and handling charges
will apply.

I/We hereby agree to abide by the terms and conditions of auction sale.

Signature:
Date


All enquiries
Phone Sue or Sharon on 045 797 7000
Email: theauctionqueens@gmail.com
-->