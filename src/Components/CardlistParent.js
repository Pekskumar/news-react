import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardlistChild from "./CardlistChild";
import Spinner from "react-bootstrap/Spinner";

const CardlistParent = (props) => {
  let apikey = "ecfaf9eaaa8d40a5b5d769210f5ee616";
  // let apikeypra = "4a4147512926403ea3e6b4359e254a1c";
  // console.log("CardlistParent props ::", props);
  let dummy = [
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI Lifestyle Desk",
      title:
        "Varalaxmi Sarathkumar stuns in green lehenga at her Mehendi ceremony ahead of wedding - The Times of India",
      description:
        "Varalaxmi, daughter of renowned actor Sarathkumar, is embarking on the next chapter of her life: marriage. Recently, intimate glimpses from their Mehendi ceremony have surfaced, adding to the excitement.",
      url: "https://timesofindia.indiatimes.com/life-style/fashion/celeb-style/varalaxmi-sarathkumar-stuns-in-green-lehenga-at-her-mehendi-ceremony-ahead-of-wedding/photostory/111422293.cms",
      urlToImage: "https://static.toiimg.com/photo/111422697.cms",
      publishedAt: "2024-07-03T04:11:00Z",
      content:
        "Varalaxmi, daughter of renowned actor Sarathkumar, is embarking on the next chapter of her life: marriage. The acclaimed actress got engaged to her dream partner, Nicholai Sachdev, in March 2024. Now… [+191 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Kalki 2898 AD Box Office Collection Day 6: Prabhas' Film Inches Closer To Rs 600 Crore Mark Worldwide - NDTV Movies",
      description:
        "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
      url: "https://www.ndtv.com/",
      urlToImage: "https://cdn.ndtv.com/common/images/ogndtv.png",
      publishedAt: "2024-07-03T04:02:50Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Ananya Das",
      title:
        "Ajay Devgn and Tabu's Auron Mein Kahan Dum Tha release date postponed, Kill to enjoy a solo outing this Friday - Hindustan Times",
      description:
        "Auron Mein Kahan Dum Tha was earlier scheduled to release on July 5. The film also stars Jimmy Sheirgill, Sayaji Shinde, Shantanu Maheshwari, Saiee Manjrekar. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/ajay-devgn-and-tabus-auron-mein-kahan-dum-tha-release-date-postponed-kill-to-enjoy-a-solo-outing-this-friday-101719974675483.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/07/03/1600x900/Ajay_Devgn_and_Tabu_in_Auron_Mein_Kahan_Dum_Tha_1718272820975_1719975781120.PNG",
      publishedAt: "2024-07-03T03:20:34Z",
      content:
        "The release date of Auron Mein Kahan Dum Tha, starring Ajay Devgn and Tabu, has been postponed. The film's team on Tuesday shared that they have decided to postpone the film \"on the request of the ex… [+2171 chars]",
    },
    {
      source: {
        id: null,
        name: "PINKVILLA",
      },
      author: "Apeksha Juneja",
      title:
        "Kalki 2898 AD: Ranveer Singh reviews Deepika Padukone starrer; calls her ‘beyond compare’ and praises Amitabh Bachchan, Prabhas - PINKVILLA",
      description:
        "Ranveer Singh Recently Watched The Movie Kalki 2898 AD And Heaped Compliments Upon His Wife, Deepika Padukone, And The Rest Of The Cast And Crew In His Review.",
      url: "https://www.pinkvilla.com/entertainment/news/kalki-2898-ad-ranveer-singh-reviews-deepika-padukone-starrer-calls-her-beyond-compare-and-praises-amitabh-bachchan-prabhas-1323562",
      urlToImage:
        "https://www.pinkvilla.com/images/2024-07/264930023_ranveer-singh-deepika-padukone.jpg",
      publishedAt: "2024-07-03T02:12:23Z",
      content:
        "Kalki 2898 AD, which was released in theaters on June 27, has been winning the hearts of the audience. The sci-fi film, starring Prabhas, Deepika Padukone, Amitabh Bachchan, and Kamal Haasan, has per… [+2200 chars]",
    },
    {
      source: {
        id: null,
        name: "VOGUE India",
      },
      author: "Woodstock Witch",
      title: "Sagittarius Horoscope Today: July 3, 2024 - VOGUE India",
      description:
        "Read VOGUE India's free daily Sagittarius horoscope for 3rd July 2024 to learn more about what the stars have in store for you! Click here for our cosmic tips",
      url: "https://www.vogue.in/horoscope/product/sagittarius-horoscope-today-july-3-2024/",
      urlToImage:
        "https://media.vogue.in/wp-content/uploads/2019/12/Sagittarius.jpg",
      publishedAt: "2024-07-03T00:20:04Z",
      content:
        "Sit with it, Sagittarius. Sit with the pain and the discomfort thats emerging at the moment. Instead of rejecting what your inner landscape is revealing to you, honour this as a period of growth, hea… [+417 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Neeraj Dhankher",
      title:
        "Career Horoscope Today for July 03, 2024: Tips to overcome roadblocks at work - Hindustan Times",
      description:
        "Daily Horoscope Today, July 03, 2024: Get daily career astrological predictions that will help you prosper at your workplace. | Horoscope",
      url: "https://www.hindustantimes.com/astrology/horoscope/career-horoscope-today-for-july-03-2024-tips-to-overcome-roadblocks-at-work-101719927747488.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/07/02/1600x900/photo-1553729459-efe14ef6055d_1718903412414_1719928649459.jpg",
      publishedAt: "2024-07-02T21:30:07Z",
      content:
        "Aries: Today, you may find yourself in the middle of the whirlwind of change. While your vitality and ability to make fast decisions may be seen as positive qualities, they can also work against you … [+5003 chars]",
    },
    {
      source: {
        id: null,
        name: "PINKVILLA",
      },
      author: "Loveleen Kaur",
      title:
        "EXCLUSIVE: Aamir Khan and Junaid should work on remake of THIS film of Mr Perfectionist, says Maharaj helmer Siddharth P. Malhotra - PINKVILLA",
      description:
        "Aamir Khan's Son Junaid Khan Made His Acting Debut With The Crime Drama Film Maharaj. Helmed By Siddharth P. Malhotra, It Also Stars Jaideep Ahlawat, Sharvari Wagh And Others.",
      url: "https://www.pinkvilla.com/entertainment/exclusives/exclusive-aamir-khan-and-junaid-should-work-on-remake-of-this-film-of-mr-perfectionist-says-maharaj-helmer-siddharth-p-malhotra-1323554",
      urlToImage:
        "https://www.pinkvilla.com/images/2024-07/263084521_aamir-min.jpg",
      publishedAt: "2024-07-02T20:18:37Z",
      content:
        "Aamir Khans son Junaid recently made his acting debut with Siddharth P. Malhotras film Maharaj. Despite facing multiple challenges, the biographical crime drama made its debut on OTT on June 21.\r\nAmi… [+2046 chars]",
    },
    {
      source: {
        id: null,
        name: "123telugu.com",
      },
      author: null,
      title:
        "Tamil blockbuster Garudan is now streaming on this OTT platform - 123telugu",
      description:
        "Telugu cinema news, Movie reviews, OTT News, OTT Release dates, Latest Movie reviews in Telugu, telugu movie reviews, Box office collections",
      url: "https://www.123telugu.com/mnews/tamil-blockbuster-garudan-is-now-streaming-on-this-ott-platform.html",
      urlToImage:
        "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      publishedAt: "2024-07-02T19:32:00Z",
      content:
        "Tamil actor Soori delivered a solid blockbuster with the village drama Garudan. The film grossed over 50 crores at the worldwide box office and emerged as one of the biggest hits of Kollywood in 2024… [+811 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "Top 10 Raw Moments: July 1, 2024 - WWE",
      description: null,
      url: "https://www.youtube.com/watch?v=bUb3NqqfF7A",
      urlToImage: null,
      publishedAt: "2024-07-02T19:00:27Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
    },
    {
      source: {
        id: null,
        name: "PINKVILLA",
      },
      author: "Loveleen Kaur",
      title:
        "Anant Ambani-Radhika Merchant’s Wedding: Nita-Mukesh Ambani gift gold, silver and Rs 1 lakh cash to 50 couples at mass wedding; REPORT - PINKVILLA",
      description:
        "Anant Ambani And Radhika Merchant Will Tie The Knot On July 12 In Mumbai’s Jio World Centre. Singers Like Adele, Drake, And Lana Del Rey Are Expected To Perform At The Star-studded Event.",
      url: "https://www.pinkvilla.com/entertainment/news/anant-ambani-radhika-merchants-wedding-nita-mukesh-ambani-gift-gold-silver-and-rs-1-lakh-cash-to-50-couples-at-mass-wedding-report-1323534",
      urlToImage:
        "https://www.pinkvilla.com/images/2024-07/788655516_ambani-cover-min-1.jpg",
      publishedAt: "2024-07-02T18:54:19Z",
      content:
        "Ahead of Anant Ambani and Radhika Merchants wedding later this month, billionaire couple Nita and Mukesh Ambani performed a good deed and organized a mass wedding in Thane, Mumbai.\r\nOn June 2, nearly… [+1901 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Dr J.N Pandey",
      title:
        "Capricorn Daily Horoscope Today, July 03, 2024 advice on financial prudence - Hindustan Times",
      description:
        "Read Capricorn daily horoscope for July 03, 2024 to know your astrological predictions. Today, you should aim for equilibrium in all aspects of their life. | Horoscope",
      url: "https://www.hindustantimes.com/astrology/horoscope/capricorn-daily-horoscope-today-july-03-2024-advice-on-financial-prudence-101719931044402.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/07/02/1600x900/Capri_freepik_1716404225777_1719946237028.jpg",
      publishedAt: "2024-07-02T18:53:25Z",
      content:
        "Capricorn (22nd December to 19th January)\r\nDaily Horoscope Prediction says, focus on Balance and Self-Care\r\nEmbrace balance today. Nurture your relationships, stay focused at work, and prioritize you… [+3088 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "etimes.in",
      title:
        "Bigg Boss OTT 3: Bigg Boss sends shampoo for Shivani Kumari as she complaints of lice in her hair; Munish - The Times of India",
      description:
        "In a fiery episode of Bigg Boss OTT season 3, tensions rise as contestants navigate drama, hygiene concerns, and creative disputes, culminating in Vis",
      url: "https://timesofindia.indiatimes.com/tv/news/hindi/bigg-boss-ott-3-bigg-boss-sends-shampoo-for-shivani-kumari-as-she-complaints-of-lice-in-her-hair-munisha-khatwani-is-concerned-about-everyones-hygiene/articleshow/111440157.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-111440153,width-1070,height-580,imgsize-26712,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-07-02T18:49:00Z",
      content:
        "Bigg Boss OTT 3's Payal Malik: Ek Time Tha, Armaan, Kritika Aur Main Teeno Suicide Karna Chahte The",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Dr J.N Pandey",
      title:
        "Pisces Daily Horoscope Today, July 03, 2024 predicts unexpected turns - Hindustan Times",
      description:
        "Read Pisces daily horoscope for July 03, 2024 to know your astrological predictions. Today, love may take unexpected turns. | Horoscope",
      url: "https://www.hindustantimes.com/astrology/horoscope/pisces-daily-horoscope-today-july-03-2024-predicts-unexpected-turns-101719931324833.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/07/02/1600x900/Pisces_Freepik_1716404835423_1719942533422.jpg",
      publishedAt: "2024-07-02T18:41:03Z",
      content:
        "Pisces (19th February to 20th March)\r\nDaily Horoscope Prediction says, embrace Change with Open Arms\r\nToday is a day of transformations; embrace change in love, career, finances, and health.\r\nPisces … [+3136 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Dr J.N Pandey",
      title:
        "Leo Daily Horoscope Today, July 03, 2024 predicts income may arise - Hindustan Times",
      description:
        "Read Leo daily horoscope for July 3, 2024 to know your astrological predictions. Leos, today invites you to open your heart and mind to new possibilities. | Horoscope",
      url: "https://www.hindustantimes.com/astrology/horoscope/leo-daily-horoscope-today-july-03-2024-predicts-income-may-arise-101719930644705.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/07/02/1600x900/Leo_Freepik_1716401798981_1719944406247.jpg",
      publishedAt: "2024-07-02T18:34:02Z",
      content:
        "Leo (23rd July to 22nd August)\r\nDaily Horoscope Prediction says, embrace New Beginnings and Opportunities\r\nToday is all about embracing fresh starts and welcoming new opportunities in both your perso… [+3289 chars]",
    },
    {
      source: {
        id: null,
        name: "The Quint",
      },
      author: "Saima Andrabi",
      title:
        "Wordle 1110 Answer for 3 July 2024: Hints & Clues to Guess Word of the Day - The Quint",
      description:
        "Discover the Wordle 1110 answer for 3 July 2024! Get hints and clues to solve today's challenging word puzzle and keep your winning streak alive.",
      url: "https://www.thequint.com/tech-and-auto/tech-news/wordle-1110-answer-for-3-july-2024-hints-clues-to-guess-word-of-the-day",
      urlToImage:
        "https://images.thequint.com/thequint%2F2023-08%2F6066a4b3-8c1c-4dd5-bdcf-4cbaf8ddf5d7%2FWhatsApp_Image_2022_02_18_at_11_31_46_AM.jpeg?rect=0%2C48%2C1280%2C672",
      publishedAt: "2024-07-02T18:31:00Z",
      content:
        "Wordle 1110 Answer for 3 July 2024: The online web puzzle Wordle has been updated to a new level on Wednesday, 3 July 2024. To guess the answer, users might require online hints and clues. The Wordle… [+553 chars]",
    },
    {
      source: {
        id: null,
        name: "Bollywood Life",
      },
      author: "Sanskruti Nemane",
      title:
        "Anupamaa serial twists: Here's why we will see Anuj's depressed look post another big leap in the show; will he get his Anu? - Bollywood Life",
      description:
        "Anupamaa will reportedly take another leap. Recently, Gaurav Khanna aka Anuj's new look went viral and here's the reason why we will see Anuj in that state post leap.",
      url: "https://www.bollywoodlife.com/tv/anupamaa-serial-twists-heres-why-we-will-see-anujs-depressed-look-post-another-big-leap-in-the-show-will-he-get-his-anu-entertainment-news-tv-news-2930969/",
      urlToImage:
        "https://st1.bollywoodlife.com/wp-content/uploads/2024/07/Anupamaa-2024-07-02T231901.205.jpg",
      publishedAt: "2024-07-02T18:13:22Z",
      content:
        "Rupali Ganguly and Gaurav Khanna starrer Anupamaa is in the news for its interesting twists and turns. The show has been at the top of the TRP charts. It has been getting all the love and we are all … [+2460 chars]",
    },
    {
      source: {
        id: null,
        name: "123telugu.com",
      },
      author: null,
      title:
        "Laila: First look poster of Vishwak Sen in a lady get-up to be out tomorrow - 123telugu",
      description:
        "Telugu cinema news, Movie reviews, OTT News, OTT Release dates, Latest Movie reviews in Telugu, telugu movie reviews, Box office collections",
      url: "https://www.123telugu.com/mnews/laila-first-look-poster-of-vishwak-sen-in-a-lady-get-up-to-be-out-tomorrow.html",
      urlToImage:
        "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      publishedAt: "2024-07-02T18:09:00Z",
      content:
        "Mass Ka Das Vishwak Sens recent outing, Gangs of Godavari, didn’t get the desired result. There was good hype for the village action drama before its release, but the film’s content failed to live up… [+736 chars]",
    },
    {
      source: {
        id: null,
        name: "Koreaboo.com",
      },
      author: null,
      title: "BTS's Jin Shuts Down Acting As His Next Venture - Koreaboo",
      description:
        "BTS's Jin has officially shut down any possibilities of pursuing a career in acting, as ARMYs had long anticipated his starring in K-Dramas.",
      url: "https://www.koreaboo.com/news/actor-bts-jin-shuts-acting-next-venture/",
      urlToImage: "https://img.koreaboo.com/2024/07/FI.jpg",
      publishedAt: "2024-07-02T18:07:33Z",
      content:
        "BTS‘s Jin is back and busy!\r\nBTS’s Jin | @bts_bighit/X\r\nLast month, he teased that he would soon release his first official solo album after being discharged from mandatory military service.\r\n[Wevers… [+5474 chars]",
    },
    {
      source: {
        id: null,
        name: "PINKVILLA",
      },
      author: "Aditya Sagar",
      title:
        "EXCLUSIVE: Maharaj director expresses gratitude to court for allowing Junaid Khan starrer's release; urges all to give ‘fair chance’ to movie - PINKVILLA",
      description:
        "In An Exclusive Conversation With Pinkvilla, Maharaj Director Siddharth P Malhotra Expressed His Gratitude To The Judiciary System For Allowing The Junaid Khan Film To Be Released Amid Controversies.",
      url: "https://www.pinkvilla.com/entertainment/exclusives/exclusive-maharaj-director-expresses-gratitude-to-court-for-allowing-junaid-khan-starrers-release-urges-all-to-give-fair-chance-to-movie-1323512",
      urlToImage:
        "https://www.pinkvilla.com/images/2024-07/1826023232_maharaj.jpg",
      publishedAt: "2024-07-02T17:27:51Z",
      content:
        "Aamir Khans eldest son Junaid Khan is now the buzzing topic of town with his acting debut in the Netflix film Maharaj. Directed by Siddharth P Malhotra, the movie also starred Jaideep Ahlawat, Sharva… [+2222 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Anurag Bohra",
      title:
        "Kakuda trailer: Sonakshi Sinha, Riteish Deshmukh's horror-comedy takes a jibe at Stree, Manjulika - Hindustan Times",
      description:
        "The trailer of Sonakshi Sinha, Riteish Deshmukh and Saqib Saleem's Kakuda released on June 2. The horror-comedy is helmed by Munjya director Aditya Sarpotdar. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/kakuda-trailer-sonakshi-sinha-riteish-deshmukhs-horror-comedy-takes-a-jibe-at-stree-manjulika-101719936901215.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/07/02/1600x900/kakuda_riteish_sonakshi_news_1719940070877_1719940113338.jpg",
      publishedAt: "2024-07-02T17:18:03Z",
      content:
        "Bollywood is currently embracing Halloween with a series of horror-comedies releasing this year. Following the success of Munjya, Aditya Sarpotdar is bringing another spooky comedy starring Sonakshi … [+1826 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Shrishti Negi",
      title:
        "Shatrughan Sinha BREAKS Silence on Health Rumours and Sonakshi Sinha's Wedding: 'I'm No Longer...' - News18",
      description:
        "Days after his daughter Sonakshi Sinha's wedding, actor Shatrughan Sinha was hospitalised at Kokilaben Ambani Hospital in Mumbai for a routine check-up.",
      url: "https://www.news18.com/movies/shatrughan-sinha-breaks-silence-on-health-rumours-and-sonakshi-sinhas-wedding-im-no-longer-8952368.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2024/06/sonakshi-sinha-zaheer-iqbal-wedding-live-updates-7-2024-06-a65412acf91134ae7b9dfda6bb15b69d-16x9.jpg?impolicy=website&width=1200&height=675",
      publishedAt: "2024-07-02T16:56:11Z",
      content:
        "Veteran actor-turned-politician Shatrughan Sinha has finally addressed the rumours surrounding his health after he was admitted to Kokilaben hospital in Mumbai over the weekend. Sinha denied reports … [+1691 chars]",
    },
    {
      source: {
        id: null,
        name: "123telugu.com",
      },
      author: null,
      title:
        "Report: Prithviraj Sukumaran to play the villain in SSMB29 - 123telugu",
      description:
        "Telugu cinema news, Movie reviews, OTT News, OTT Release dates, Latest Movie reviews in Telugu, telugu movie reviews, Box office collections",
      url: "https://www.123telugu.com/mnews/report-prithviraj-sukumaran-to-play-the-villain-in-ssmb29.html",
      urlToImage:
        "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      publishedAt: "2024-07-02T16:35:00Z",
      content:
        "A month ago, rumors in Mollywood film circles stated that versatile actor Prithviraj Sukumaran would play the antagonist in SS Rajamouli and Mahesh Babu’s next. Now, a Bollywood media outlet reported… [+848 chars]",
    },
    {
      source: {
        id: null,
        name: "Odishatv.in",
      },
      author: "Nitesh Kumar Sahoo",
      title:
        "Kalki 2898 AD: Jawan helmer Atlee hails Prabhas, Amitabh Bachchan and Deepika Padukone, misses Kamal Haasan in review! - OTV News",
      description:
        "Kalki 2898 AD is undeniably a visual spectacle that has driven moviegoers crazy including some of the big names in the Indian film industry. After SS Rajamouli, Suriya, Yash, Prasanth Varma, Vijay Deverakonda, Nani and several others, Atlee hailed the filmmak…",
      url: "https://odishatv.in/news/entertainment/kalki-2898-ad-jawan-atlee-hails-prabhas-amitabh-bachchan-deepika-padukone-misses-kamal-haasan-review-238375",
      urlToImage:
        "https://images.odishatv.in/uploadimage/library/16_9/16_9_5/recent_photo_1719937574.webp",
      publishedAt: "2024-07-02T16:30:09Z",
      content:
        "Nag Ashwin's Kalki 2898 AD has created mass euphoria with its visuals, set up and scale. The sci-fi flick has been creating an unstoppable wave of excitement among movie enthusiasts. While praises ar… [+3205 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Chirag Sehgal",
      title:
        "Armaan Malik's 1st Wife Payal Makes SHOCKING Comment, Says 'Bahut Log Hai Jo Ghar Mein Biwi Aur...' - News18",
      description:
        "Armaan Malik married Payal in 2011. Six years later, in 2018, the YouTuber married Payal’s best friend, Kritika, without legally ending his first marriage.",
      url: "https://www.news18.com/movies/armaan-malik-1st-wife-payal-makes-shocking-comment-says-bahut-log-hai-jo-ghar-mein-biwi-aur-8952328.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2024/07/armaan-malik-payal-malik-2024-07-5a187aa63a2ffe0f5822d63ff8e806c8-16x9.jpg?impolicy=website&width=1200&height=675",
      publishedAt: "2024-07-02T16:09:10Z",
      content:
        "Armaan Malik has been facing backlash ever since he entered the Bigg Boss OTT 3 house with both his wives, Payal and Kritika. Many have accused him of promoting polygamy via his vlogs and now on the … [+1886 chars]",
    },
    {
      source: {
        id: null,
        name: "Koreaboo.com",
      },
      author: null,
      title:
        "BTS's Jungkook Makes Unexpected Appearance On Jin's Instagram - Koreaboo",
      description:
        "BTS's Jin shared an unexpected Instagram update with Jungkook, as he wore merchandise from the maknae's \"GOLDEN\" collection.",
      url: "https://www.koreaboo.com/news/bts-jin-instagram-update-wearing-jungkook-shirt/",
      urlToImage: "https://img.koreaboo.com/2024/07/Copy-of-FI.jpg",
      publishedAt: "2024-07-02T15:59:31Z",
      content:
        "BTS‘s Jin has returned to Instagram, and he included Jungkook!\r\nJin (left) and Jungkook (right)\r\nThe last time Jin posted to Instagram was after his 2024 BTS FESTA fanmeeting.\r\nARMYs have assumed tha… [+1232 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        'Vijay Devarakonda On His Cameo In Kalki 2898 AD: "Did It For Prabhas And Nag Ashwin" - NDTV Movies',
      description:
        '"There is no such thing as Prabhas vs Vijay in the film," the actor said',
      url: "https://www.ndtv.com/entertainment/vijay-devarakonda-on-his-cameo-in-kalki-2898-ad-did-it-for-prabhas-and-nag-ashwin-6019764",
      urlToImage:
        "https://c.ndtvimg.com/2024-07/rekmheog_deepika-_625x300_02_July_24.jpeg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240615.100",
      publishedAt: "2024-07-02T15:46:55Z",
      content:
        'Vijay Devarakonda On His Cameo In Kalki 2898 AD: "Did It For Prabhas And Nag Ashwin"\r\nNew Delhi: Kalki 2898 AD has been trending big ever since it released in theatres last Thursday. However, there i… [+1650 chars]',
    },
    {
      source: {
        id: null,
        name: "Koreaboo.com",
      },
      author: null,
      title:
        "Get Ready For BTS's Jungkook And Jimin's New Travel Variety Show - Koreaboo",
      description:
        "Recently, BTS's official account posted a teaser video of two members on a trip -- but ARMYs know it's Jungkook and Jimin's travel variety show together!",
      url: "https://www.koreaboo.com/news/bts-jungkook-jimin-travel-variety-show/",
      urlToImage:
        "https://img.koreaboo.com/2024/07/Header-Image-2024-07-02T113146.365.jpg",
      publishedAt: "2024-07-02T15:32:43Z",
      content:
        "Recently, BTS‘s official account posted a teaser video featuring photos of two members on a trip — but ARMYs are convinced it’s none other than Jungkook and Jimin‘s travel variety show together!\r\nBTS… [+1126 chars]",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "India Today Trending Desk",
      title:
        "Mumbai man brutally trolled for getting tattoo featuring 'Vada Pav Girl'. Video - India Today",
      description:
        "A man was brutally trolled by several sections of the internet for getting a tattoo featuring Chandrika Dixit popularly known as the 039Vada Pav Girl039 on his arm",
      url: "https://www.indiatoday.in/trending-news/story/mumbai-man-vada-pav-girl-tattoo-brutally-trolled-viral-video-2561373-2024-07-02",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/mumbai-man-brutally-trolled-for-getting-tattoo-featuring-vada-pav-girl-photos-mahesh-chavaninst-025032987-16x9_0.jpg?VersionId=gDnklhZxk6qcnmIcgUMj9Y6CpCjl2WCC",
      publishedAt: "2024-07-02T14:56:47Z",
      content:
        "A man invited the ire of the internet after he got a tattoo of Chandrika Dixit, popularly known as the ‘Vada Pav Girl’, on his arm. Mahesh Chavan, owner of a tattoo studio in Navi Mumbai, posted a vi… [+1641 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Will 'Panchayat' fame Jitendra Kumar make a cameo in 'Mirzapur 3'? Ali Fazal aka Guddu bhaiya REVEALS - TOI Etimes",
      description: null,
      url: "https://admin.google.com/ServiceNotAllowed",
      urlToImage: null,
      publishedAt: "2024-07-02T14:40:00Z",
      content:
        "We are sorry, but you do not have access to this service. Some reasons why you may not have access:\r\n<ul><li>Your account is managed by an organization that has this service turned off for its users.… [+306 chars]",
    },
    {
      source: {
        id: null,
        name: "123telugu.com",
      },
      author: null,
      title: "SVC 58: These two heroines to romance Venkatesh - 123telugu",
      description:
        "Telugu cinema news, Movie reviews, OTT News, OTT Release dates, Latest Movie reviews in Telugu, telugu movie reviews, Box office collections",
      url: "https://www.123telugu.com/mnews/svc-58-these-two-heroines-to-romance-venkatesh.html",
      urlToImage:
        "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      publishedAt: "2024-07-02T14:30:00Z",
      content:
        "Victory Venkatesh, last seen in the box office disappointment Saindhav, is set to make a comeback. The film’s Hindi version recently debuted on Jio Cinema. Now, the renowned actor has teamed up with … [+570 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Junaid Khan Reveals He Auditioned For Dad Aamir Khan's Laal Singh Chaddha - NDTV Movies",
      description:
        '"Papa was very keen that I do the film," revealed Junaid Khan',
      url: "https://www.ndtv.com/entertainment/junaid-khan-reveals-he-auditioned-for-dad-aamir-khans-laal-singh-chaddha-6019221",
      urlToImage:
        "https://c.ndtvimg.com/2024-07/e68njn6_deepika-_625x300_02_July_24.jpeg",
      publishedAt: "2024-07-02T14:24:44Z",
      content:
        "Image was shared on X. (Image courtesy: priyankaroy2706)\r\nNew Delhi: Aamir Khan's son Junaid Khan recently made his acting debut with the Netflix movie, Maharaj. In a recent interview, however, Junai… [+1882 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "In Pics: Priyanka Chopra's Beach Holiday With Husband Nick Jonas And Daughter Malti Marie - NDTV Movies",
      description: "Priyanka is shooting for her film Bluff in Australia",
      url: "https://www.ndtv.com/entertainment/in-pics-priyanka-chopras-beach-holiday-with-husband-nick-jonas-and-daughter-malti-marie-6018958",
      urlToImage:
        "https://c.ndtvimg.com/2024-07/vdu528k8_priyanka-_625x300_02_July_24.jpeg",
      publishedAt: "2024-07-02T13:45:34Z",
      content:
        "Priyanka, Nick and Malti Marie pictured together. (courtesy: JerryXmimi)\r\nNew Delhi: Priyanka Chopra is having a gala time with husband Nick Jonas and daughter Malti Marie on the sidelines of her sho… [+1900 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Entertainment Desk",
      title:
        "Sonakshi Sinha, Zaheer Iqbal enjoy ‘beautiful sunsets' by the pool on their honeymoon. See pics - Hindustan Times",
      description:
        "Sonakshi Sinha shared a glimpse of her honeymoon in new pictures. She and Zaheer Iqbal tied the knot at her Mumbai home on June 23. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/sonakshi-sinha-zaheer-iqbal-enjoy-beautiful-sunsets-by-the-pool-on-their-honeymoon-see-pics-101719925216014.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/07/02/1600x900/sona_1719925312217_1719925312491.jfif",
      publishedAt: "2024-07-02T13:39:01Z",
      content:
        "Sonakshi Sinha shared a bunch of new pictures from her romantic honeymoon with husband Zaheer Iqbal. On Tuesday evening, Sonakshi took to her Instagram Stories to share pictures of both of them enjoy… [+1918 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Aalokitaa Basu",
      title:
        "Kill gears up for release: From Animal to Mirzapur, 5 most violent Indian titles ahead of the Lakshya-led gorecore - Hindustan Times",
      description:
        "Bloody action thriller Kill has garnered immense international attention ahead of its release. Let's take a look at some other similarly themed Indian titles",
      url: "https://www.hindustantimes.com/htcity/cinema/kill-gears-up-for-release-from-animal-to-mirzapur-5-most-violent-indian-titles-ahead-of-the-lakshya-led-gorecore-101719921893981.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/07/02/1600x900/Most_violent_Indian_titles_1719922825977_1719922826262.jpg",
      publishedAt: "2024-07-02T13:00:38Z",
      content:
        "The Karan Johar and Guneet Monga produced Kill has registered a blockbuster start with its lap at the film festival circuit, namely the Toronto International Film Festival. The almost unanimous awe-s… [+4735 chars]",
    },
    {
      source: {
        id: null,
        name: "Bollywood Hungama",
      },
      author: "Bollywood Hungama",
      title:
        "Disha Patani flaunts new tattoo “PD”, shares playful message amid dating rumors with Kalki 2898 AD co-star Prabhas: “Cloud Nine” - Bollywood Hungama",
      description:
        "Disha Patani flaunts new tattoo “PD”, shares playful message amid dating rumors with Kalki 2898 AD co-star Prabhas: “Cloud Nine” Bollywood News: Latest Bollywood News, Bollywood News Today, Bollywood Celebrity News, Breaking News, Celeb News, Celebrities News…",
      url: "https://www.bollywoodhungama.com/news/features/disha-patani-flaunts-new-tattoo-pd-shares-playful-message-amid-dating-rumors-kalki-2898-ad-co-star-prabhas-cloud-nine/",
      urlToImage:
        "https://stat5.bollywoodhungama.in/wp-content/uploads/2024/07/Disha_Patani_Tattoo.jpeg",
      publishedAt: "2024-07-02T11:55:11Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "123telugu.com",
      },
      author: null,
      title: "Tiragabadara Saami’s trailer is entertaining - 123telugu",
      description:
        "Telugu cinema news, Movie reviews, OTT News, OTT Release dates, Latest Movie reviews in Telugu, telugu movie reviews, Box office collections",
      url: "https://www.123telugu.com/mnews/tiragabadara-saamis-trailer-is-entertaining.html",
      urlToImage:
        "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      publishedAt: "2024-07-02T11:10:00Z",
      content:
        "Raj Tharun, who last appeared in Nagarjuna’s Naa Saami Ranga, is gearing up to entertain audiences with his upcoming movie Tiragabadara Saami. Directed by AS Ravikumar Chowdhary, famed for Pilla Nuvv… [+852 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Entertainment desk -",
      title:
        "Renukaswamy murder: Darshan breaks down in jail as mother, son and brother visit him - Moneycontrol",
      description:
        "The Renukaswamy murder case has plunged Kannada actor Darshan Thoogudeepa into a whirlwind of controversy and legal troubles. Recently, Darshan was visited by his family at the Central Prison of the Parappana Agrahara on the outskirts of Bengaluru city, a mom…",
      url: "https://www.moneycontrol.com/entertainment/renukaswamy-murder-darshan-breaks-down-in-jail-as-mother-son-and-brother-visit-him-article-12760707.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2024/07/20240702103857_FotoJet-70.jpg",
      publishedAt: "2024-07-02T10:40:37Z",
      content:
        "The Renukaswamy murder case has plunged Kannada actor Darshan Thoogudeepa into a whirlwind of controversy and legal troubles. Recently, Darshan was visited by his family at the Central Prison of the … [+3195 chars]",
    },
    {
      source: {
        id: null,
        name: "123telugu.com",
      },
      author: null,
      title:
        "Munjya braves Kalki 2898 AD’s storm; Horror comedy hits 100 crores nett in India - 123telugu",
      description:
        "Telugu cinema news, Movie reviews, OTT News, OTT Release dates, Latest Movie reviews in Telugu, telugu movie reviews, Box office collections",
      url: "https://www.123telugu.com/mnews/munjya-braves-kalki-2898-ads-storm-horror-comedy-hits-100-crores-nett-in-india.html",
      urlToImage:
        "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      publishedAt: "2024-07-02T09:24:00Z",
      content:
        "Well-made horror comedies have always found acceptance among the Hindi audience. Irrespective of the star cast, many such movies have set the cash registers ringing, and a recent example for it is Mu… [+989 chars]",
    },
    {
      source: {
        id: "the-hindu",
        name: "The Hindu",
      },
      author: "The Hindu",
      title:
        "‘Laapata Ladies’, ‘Manjummel Boys’, ‘Aattam’ among top 10 rated films on Letterboxd - The Hindu",
      description: null,
      url: "https://www.thehindu.com/entertainment/movies/laapata-ladies-manjummel-boys-aattam-among-top-10-rated-films-on-letterboxd/article68358631.ece",
      urlToImage: null,
      publishedAt: "2024-07-02T09:12:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "DNA India",
      },
      author: "Abhimanyu Mathur",
      title:
        "Meet man with 26 flops, no hits in 23 years, last 2 films lost Rs 450 crore, alleged to have not paid cast, - DNA India",
      description:
        "This producer has not given a single hit since 2001, with his last two films losing Rs 450 crore at the box office",
      url: "https://www.dnaindia.com/bollywood/report-meet-man-vashu-bhagnani-26-flops-in-23-years-ganapath-bade-miyan-chote-miyan-pooja-entertainment-non-payment-3095393",
      urlToImage:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2024/07/02/2639678-untitled-design-2024-07-02t115413.357.png",
      publishedAt: "2024-07-02T09:02:00Z",
      content:
        "This producer has not given a single hit since 2001, with his last two films losing Rs 450 crore at the box officeFilmmaking is a fickle business. In a field where success is governed by several arbi… [+2148 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        'Samantha Ruth Prabhu And "Warrior" Hina Khan\'s Instagram Exchange: "Takes One To Know One" - NDTV Movies',
      description:
        '"The way you\'ve handled all that life threw at you is beyond amazing," Hina Khan wrote for Samantha',
      url: "https://www.ndtv.com/entertainment/samantha-ruth-prabhu-and-warrior-hina-khans-instagram-exchange-takes-one-to-know-one-6016585",
      urlToImage:
        "https://c.ndtvimg.com/2024-07/g04dumko_-hina-khan-_625x300_02_July_24.jpeg",
      publishedAt: "2024-07-02T08:34:22Z",
      content:
        "Hina Khan shared this image. (courtesy: realhinakhan)\r\nNew Delhi: Television star Hina Khan revealed last week that she has been diagnosed with Stage Three breast cancer and is being treated for it. … [+1887 chars]",
    },
    {
      source: {
        id: null,
        name: "PINKVILLA",
      },
      author: "Rajni Singh",
      title:
        "Sonakshi Sinha’s brother Luv Sinha confirms skipping her wedding with Zaheer Iqbal: ‘Would not associate with some people’ - PINKVILLA",
      description:
        "Luv Sinha Has Officially Stated That He Chose Not To Attend Sonakshi Sinha's Wedding With Zaheer Iqbal And Expressed His Intention To Avoid Certain People Indefinitely.",
      url: "https://www.pinkvilla.com/entertainment/news/sonakshi-sinhas-brother-luv-sinha-confirms-skipping-her-wedding-with-zaheer-iqbal-would-not-associate-with-some-people-1323263",
      urlToImage:
        "https://www.pinkvilla.com/images/2024-07/971085634_150654801_luv-sinha-sonakshi-sinha-zaheer-iqbal-1.jpg",
      publishedAt: "2024-07-02T08:32:03Z",
      content:
        "Actress Sonakshi Sinha married her longtime beau Zaheer Iqbal on June 23, 2024. The intimate wedding was attended by her close friends and family members. However, despite this, numerous videos and p… [+3471 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Watch: Vicky Kaushal Is Killing it With His Dance Moves On Tauba Tauba. Wife Katrina Kaif's Reaction - NDTV Movies",
      description: "The film also stars Ammy Virk and Triptii Dimri",
      url: "https://www.ndtv.com/entertainment/bad-newz-song-tauba-tauba-punjabi-munde-vicky-kaushal-and-karan-aujla-grooving-to-upbeat-track-6016375",
      urlToImage:
        "https://c.ndtvimg.com/2024-07/fucig6v_vicky_625x300_02_July_24.jpeg",
      publishedAt: "2024-07-02T08:27:53Z",
      content:
        "Vicky Kaushal shared this image. (Image courtesy: vickykaushal)\r\nNew Delhi: Vicky Kaushal's latest Instagram entry demands your undivided attention. The actor has uploaded a video on Instagram. The c… [+2027 chars]",
    },
    {
      source: {
        id: null,
        name: "PINKVILLA",
      },
      author: "Goutham S",
      title:
        "EXCLUSIVE: Shankar on his next after Game Changer; 'It could be a period film, sci-fi or James Bond genre' - PINKVILLA",
      description:
        "In An Exclusive Chat With Pinkvilla, Director Shankar Unveiled Details About His Ideas For Upcoming Projects, Including A Period And James Bond-esque Flicks.",
      url: "https://www.pinkvilla.com/entertainment/exclusives/exclusive-shankar-on-his-next-after-game-changer-it-could-be-a-period-film-sci-fi-or-james-bond-genre-1323246",
      urlToImage:
        "https://www.pinkvilla.com/images/2024-07/1274322960_shankar_next-projects-jpg-1.jpg",
      publishedAt: "2024-07-02T08:06:10Z",
      content:
        "Director Shankar, who is eagerly anticipating the release of his upcoming film Indian 2 starring Kamal Haasan, has been actively promoting the movie. The master craftsman, known for his technically a… [+2142 chars]",
    },
    {
      source: {
        id: null,
        name: "The Siasat Daily",
      },
      author: "Chandra Mouli",
      title:
        "Khalid Al Ameri sparks engagement rumours with actress from Hyderabad - The Siasat Daily",
      description:
        "Chennai: Social media is buzzing with the news of Dubai-based influencer Khalid Al Ameri's alleged engagement with Tamil actor Sunaina. The excitement began on June 5 when Sunaina posted a photo of two hands, hers and a man's, holding each other with a lock e…",
      url: "https://www.siasat.com/khalid-al-ameri-sparks-engagement-rumours-with-actress-from-hyderabad-3054643/",
      urlToImage:
        "https://cdn.siasat.com/wp-content/uploads/2024/07/Khalid-Al-Ameri.jpg",
      publishedAt: "2024-07-02T07:41:00Z",
      content:
        "Chennai: Social media is buzzing with the news of Dubai-based influencer Khalid Al Ameri’s alleged engagement with Tamil actor Sunaina. The excitement began on June 5 when Sunaina posted a photo of t… [+1672 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        'Rhea Chakraborty Jokes About Being A "Bigger Gold Digger" Than Sushmita Sen. Her Reply - NDTV Movies',
      description:
        "Rhea welcomed Sushmita Sen as the first guest on her podcast",
      url: "https://www.ndtv.com/entertainment/rhea-chakraborty-jokes-about-being-a-bigger-gold-digger-than-sushmita-sen-her-reply-6016199",
      urlToImage:
        "https://c.ndtvimg.com/2024-07/ntjrrs4_rhea_625x300_02_July_24.jpeg",
      publishedAt: "2024-07-02T07:38:01Z",
      content:
        "Rhea Chakraborty pictured with Sushmita Sen. (courtesy: YouTube)\r\nNew Delhi: Rhea Chakraborty celebrated her 32nd birthday by announcing her new podcast - titled Chapter 2. She welcomed Sushmita Sen … [+2285 chars]",
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Nick Vivarelli",
      title:
        "Bollywood Superstar Shah Rukh Khan To Be Honored With Locarno Film Festival Career Award - Variety",
      description:
        "Bollywood superstar Shah Rukh Khan will be honored by the Locarno Film Festival with a lifetime achievement award.",
      url: "https://variety.com/2024/film/global/bollywood-superstar-shah-rukh-khan-honored-locarno-film-festival-1236058869/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2024/07/Shah-Rukh-Khan.jpg?w=1000&h=563&crop=1",
      publishedAt: "2024-07-02T07:38:00Z",
      content:
        "Bollywood superstar Shah Rukh Khan will be honoured by the Locarno Film Festival with its Honorary Leopard achievement award in recognition of his outstanding career in Indian cinema spanning more th… [+2882 chars]",
    },
    {
      source: {
        id: null,
        name: "PINKVILLA",
      },
      author: "Krishma Sharma",
      title:
        "Anushka Sharma reacts after influencer recalls story from her early days of dating now-husband Virat Kohli - PINKVILLA",
      description:
        "Recently, A Social Media Influencer Shared An Interesting Story As He Recalled Interviewing Anushka Sharma During Her Dating Phase With The Indian Cricketer Virat Kohli.",
      url: "https://www.pinkvilla.com/entertainment/news/anushka-sharma-reacts-after-influencer-recalls-story-from-her-early-days-of-dating-now-husband-virat-kohli-1323217",
      urlToImage:
        "https://www.pinkvilla.com/images/2024-07/1640039756_virat-kohli-and-anushka-sharma.jpg",
      publishedAt: "2024-07-02T07:18:04Z",
      content:
        "Anushka Sharma and Virat Kohli are one of the most popular and loved celebrity couples. The couple got married in an intimate ceremony in 2017. Ever since then, their love story has been nothing shor… [+2355 chars]",
    },
    {
      source: {
        id: null,
        name: "The Statesman",
      },
      author: "Statesman Web",
      title:
        "Allu Arjun’s ‘Pushpa: The Rise’ tops Hindi films; ‘Pushpa 2’ hype soars - The Statesman",
      description:
        'Allu Arjun\'s "Pushpa: The Rise" tops the list of most-liked Hindi films since 2009, while excitement builds for its sequel, "Pushpa 2: The Rule."',
      url: "https://www.thestatesman.com/entertainment/allu-arjuns-pushpa-the-rise-tops-hindi-films-pushpa-2-hype-soars-1503315930.html",
      urlToImage:
        "https://www.thestatesman.com/wp-content/uploads/2024/04/Allu-Arjun-in-Pushpa-2.jpg",
      publishedAt: "2024-07-02T07:18:00Z",
      content:
        "Allu Arjuns 2021 blockbuster “Pushpa: The Rise” has etched its name in the annals of Indian cinema. The film, a massive hit, has clinched the top spot on the Ormax list of the most-liked Hindi theatr… [+2217 chars]",
    },
    {
      source: {
        id: null,
        name: "PINKVILLA",
      },
      author: "Himesh Mankad",
      title:
        "EXCLUSIVE: Shankar in talks with Shah Rukh Khan? Hindustani 2 director says, ‘Met SRK a couple of times but…’ - PINKVILLA",
      description:
        "For Those Unaware, Shah Rukh Khan Was The First Choice To Play Chitti In The Shankar Directed Robot. Detailed Report",
      url: "https://www.pinkvilla.com/entertainment/exclusives/exclusive-is-shankar-in-talks-with-shah-rukh-khan-the-director-says-i-met-srk-a-couple-of-times-but-1323219",
      urlToImage:
        "https://www.pinkvilla.com/images/2024-07/1315735855_shah-rukh-khan-shankar-1.jpg",
      publishedAt: "2024-07-02T07:10:02Z",
      content:
        "Back in 2008, Shankar had approached Shah Rukh Khan to play the part of Chitti in his superhero saga, Robot, however, the conversations fell through as SRK was planning another film in the same genre… [+1760 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "The Indian Express",
      title:
        "Juhi Chawla says Shah Rukh Khan would call KKR meeting at Mannat in the middle of the night: ‘I stopped attending’ - The Indian Express",
      description: null,
      url: "https://indianexpress.com/article/entertainment/bollywood/juhi-chawla-shah-rukh-khan-would-call-kkr-meeting-mannat-middle-of-the-night-9427588/",
      urlToImage: null,
      publishedAt: "2024-07-02T06:15:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "India Today Entertainment Desk",
      title:
        "'Maharaja' earns Rs 100 crore despite 'Kalki', new box office record for Tamil cinema - India Today",
      description:
        "Vijay Sethupathi039s 039Maharaja039 emerged as a new hope for the struggling Tamil film industry this year The film has grossed Rs 100 crore despite the 039Kalki039-storm at the box office",
      url: "https://www.indiatoday.in/movies/regional-cinema/story/maharaja-worldwide-box-office-tops-rs-100-crore-despite-kalki-2898-ad-new-box-office-record-for-tamil-film-industry-2561052-2024-07-02",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/maharaja-gross-rs-100-crore-worldwide-024144302-16x9_0.jpg?VersionId=EVL.8Iw0EaA8xGBxrGsS0vxPMOhhAJqg",
      publishedAt: "2024-07-02T05:44:20Z",
      content:
        "'Maharaja' has become one of the top films of the year to have crossed the benchmark of Rs 100 crore at the worldwide box office. Starring Vijay Sethupathi in the lead, the film has shown some hope f… [+1929 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Alka Jain",
      title:
        "Mumbai Police reveals Lawrence Bishnoi gang's plan to kill Salman Khan: ‘ ₹25 lakh contract and more’. Details here | Today News - Mint",
      description:
        "A chargesheet reveals that minors were recruited for Salman Khan’s assassination by the Lawrence Bishnoi gang based in North America.",
      url: "https://www.livemint.com/news/india/mumbai-police-reveals-bishnoi-gangs-plan-to-kill-salman-khan-rs-25-lakh-contract-and-more-details-here-11719895694073.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2024/07/02/1600x900/ANI-20240520573-0_1719897861059_1719897883089.jpg",
      publishedAt: "2024-07-02T05:30:32Z",
      content:
        "The Navi Mumbai Police have filed a new chargesheet against five individuals accused of planning to assassinate Bollywood actor Salman Khan. The suspects, linked to the notorious Lawrence Bishnoi gan… [+1726 chars]",
    },
    {
      source: {
        id: null,
        name: "Bollywood Life",
      },
      author: "Nikita Thakkar",
      title:
        "Anupamaa serial upcoming twist: Dimpy to go against Vanraj's decision and marry Titu? Anu-Anuj to fight for j - Bollywood Life",
      description:
        "In Anupamaa TV serial, Dimpy and Titu's wedding has been called off by Vanraj. But Anu is in the mood to fulfil Titu's wish.",
      url: "https://www.bollywoodlife.com/tv/anupamaa-serial-upcoming-twist-dimpy-to-go-against-vanrajs-decision-and-marry-titu-anu-anuj-to-fight-for-justice-entertainment-news-2930310/",
      urlToImage:
        "https://st1.bollywoodlife.com/wp-content/uploads/2024/07/Anupamaaa-8.png",
      publishedAt: "2024-07-02T05:08:28Z",
      content:
        "Anupamaa TV serial: Not a single episode of Rajan Shahi's show is without drama. That's what Anupamaa is known for. It is all about family tiffs and drama. The current track of Anupamaa is all about … [+2476 chars]",
    },
    {
      source: {
        id: null,
        name: "Bollywood Hungama",
      },
      author: "Bollywood Hungama",
      title:
        "Kill to get Hollywood remake: John Wick producers partner with Lionsgate to develop Nagesh Bhatt directorial (Details Inside!) - Bollywood Hungama",
      description:
        "Kill to get Hollywood remake: John Wick producers partner with Lionsgate to develop Nagesh Bhatt directorial (Details Inside!). Bollywood News: Latest Bollywood News, Bollywood News Today, Bollywood Celebrity News, Breaking News, Celeb News, Celebrities News,…",
      url: "https://www.bollywoodhungama.com/news/bollywood/kill-get-hollywood-remake-john-wick-producers-partner-lionsgate-develop-nagesh-bhatt-directorial-details-inside/",
      urlToImage:
        "https://stat4.bollywoodhungama.in/wp-content/uploads/2024/07/Kill_English_Remake.jpg",
      publishedAt: "2024-07-02T04:48:59Z",
      content: null,
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI Entertainment Desk",
      title:
        "Salman Khan gets into action mode for 'Sikandar' shoot; Rashmika Mandanna poses with fans on the sets - P - TOI Etimes",
      description:
        "Excitement builds as new photos from the 'Sikandar' film sets reveal hints of intense action sequences and mystery. Salman Khan's striking silhouette and Rashmika Mandanna's cheerful pose with a fan have created quite the buzz online, with fans eagerly antici…",
      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/salman-khan-gets-into-action-mode-for-sikandar-shoot-rashmika-mandanna-poses-with-fans-on-the-sets-pics-inside/articleshow/111417868.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-111417830,width-1070,height-580,imgsize-24872,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-07-02T03:13:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "DNA India",
      },
      author: "Riya Sharma",
      title:
        "Meet star, who was replaced in 20 films, gave cult classics with Salman, SRK; still never became top heroine, - DNA India",
      description:
        "This actress, who worked with Shah Rukh Khan, Salman Khan and Aishwarya Rai, never became a top heroine despite starring in cult classics.",
      url: "https://www.dnaindia.com/bollywood/report-meet-star-replaced-in-20-films-cult-classics-with-salman-shah-rukh-never-became-top-heroine-divya-dutta-3095351",
      urlToImage:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2024/07/02/2639636-fotojet-2024-07-02t070448.394-1.jpg",
      publishedAt: "2024-07-02T01:07:00Z",
      content:
        "This actress, who worked with Shah Rukh Khan, Salman Khan and Aishwarya Rai, never became a top heroine despite starring in cult classics. Many actresses who came to Bollywood to become top heroines,… [+2768 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI Entertainment Desk",
      title:
        "Nawazuddin Siddiqui opens up about facing discrimination in Bollywood; says, '.. I am the ugliest actor.. - TOI Etimes",
      description:
        "Renowned actor Nawazuddin Siddiqui candidly discusses the discrimination he has faced in Bollywood due to his looks, reflecting on societal prejudice and the industry's recognition of his talent. Read more about his journey and upcoming projects here!",
      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/nawazuddin-siddiqui-opens-up-about-facing-discrimination-in-bollywood-says-i-am-the-ugliest-actor-/articleshow/111417138.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-111417162,width-1070,height-580,imgsize-34022,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-07-02T00:28:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "M9.news",
      },
      author: null,
      title: "Prabhas’s Stardom Overshadows the Director - M9",
      description:
        "In reality, it's 99% the director's work and vision, with very little contribution from Prabhas, if we're stating the facts.",
      url: "https://www.m9.news/movienews/prabhass-stardom-overshadows-the-director-nag-ashwin/",
      urlToImage:
        "https://www.m9.news/wp-content/uploads/2024/07/prabhas-stardom-nag-ashwin.jpg",
      publishedAt: "2024-07-01T18:35:22Z",
      content:
        "The name Prabhas in the Indian entertainment industry is bigger than any other hero out there today, and this is evident once again with his recent film, ‘Kalki 2898 AD’.\r\nA quick look at media atten… [+1131 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        'Tabu Reveals How Priyadarshan Poured Coconut Oil On Her Head During Virasat Shoot: "Didn\'t Have To Do Hairstyling" - NDTV Movies',
      description:
        'Tabu recalled, "Long hair, apply oil, braid it, and go to the set"',
      url: "https://www.ndtv.com/entertainment/tabu-reveals-how-priyadarshan-poured-coconut-oil-on-her-head-during-virasat-shoot-didnt-have-to-do-hairstyling-6012270",
      urlToImage:
        "https://c.ndtvimg.com/2024-07/6pffrc78_virasat-_625x300_01_July_24.jpeg",
      publishedAt: "2024-07-01T16:12:14Z",
      content:
        "A film still from Virasat. (courtesy: X)\r\nNew Delhi: Tabu, who has collaborated with Ajay Devgn for their 10th film together Auron Mein Kahan Dum Tha, recently recalled her Virasat shooting days in a… [+1572 chars]",
    },
    {
      source: {
        id: null,
        name: "Bollywood Life",
      },
      author: "Sanskruti Nemane",
      title:
        "Yeh Rishta Kya Kehlata Hai serial twists: Abhira to lose everything again because of Sanjay and Dadisa? Will - Bollywood Life",
      description:
        "In the upcoming episodes of Yeh Rishta Kya Kehlata Hai, we will see Abhira landing in trouble again because of Sanjay Bansal and Dadisa.",
      url: "https://www.bollywoodlife.com/tv/yeh-rishta-kya-kehlata-hai-serial-twists-abhira-to-lose-everything-again-because-of-sanjay-and-dadisa-will-armaan-break-all-ties-with-the-poddars-entertainment-news-tv-news-2930108/",
      urlToImage:
        "https://st1.bollywoodlife.com/wp-content/uploads/2024/07/Yeh-Rishta-Kya-Kehlata-Hai-2024-07-01T195010.043.jpg",
      publishedAt: "2024-07-01T14:55:47Z",
      content:
        "Samridhii Shukla and Rohit Purohit starrer Yeh Rishta Kya Kehlata Hai has grabbed all the attention. In the recent episodes, we saw Armaan breaking his wedding with Ruhi and going back to Abhira. How… [+2787 chars]",
    },
    {
      source: {
        id: null,
        name: "Telugucinema.com",
      },
      author: "TeluguCinema",
      title: "Mokshagna confirms his acting debut! - Telugu Cinema",
      description:
        'Nandamuri Mokshagna, Nandamuri Balakrishna\'s son, took to social media to announce his acting debut. Mokshagna announced his debut on X.com with the post "Vasthunna". Mokshagna seems to have undergone a makeover as well. In the photo he posted on social media…',
      url: "https://telugucinema.com/news/mokshagna-confirms-his-acting-debut",
      urlToImage:
        "https://telugucinema.com/wp-content/uploads/2024/07/mokshagnadebut.jpg",
      publishedAt: "2024-07-01T14:47:33Z",
      content:
        "Nandamuri Mokshagna, Nandamuri Balakrishna’s son, took to social media to announce his acting debut. Mokshagna announced his debut on X.com with the post “Vasthunna”.\r\nMokshagna seems to have undergo… [+365 chars]",
    },
    {
      source: {
        id: null,
        name: "PINKVILLA",
      },
      author: "Baisakhi Mishra",
      title:
        "EXCLUSIVE: S Shankar talks about release of Kamal Haasan-led Indian 3, says 'I am planning to release....' - PINKVILLA",
      description:
        "In An Exclusive Interview With Pinkvilla, S. Shankar Was Asked About Indian 3, And Here’s What He Responded.",
      url: "https://www.pinkvilla.com/entertainment/south/exclusive-s-shankar-talks-about-release-of-kamal-haasan-led-indian-3-says-i-am-planning-to-release-1322992",
      urlToImage:
        "https://www.pinkvilla.com/images/2024-07/1054043359_fotojet-2024-07-01t182005-314-1.jpg",
      publishedAt: "2024-07-01T13:45:02Z",
      content:
        "Kamal Haasan and S. Shankar have once again joined forces for the sequel of their superhit film Indian. The duo is gearing up for the worldwide theatrical release of its second part on July 12. Prior… [+2382 chars]",
    },
    {
      source: {
        id: null,
        name: "DNA India",
      },
      author: "Aman Wadhwa",
      title:
        "The Buckingham Murders: Kareena Kapoor is held forcibly by cops in first look poster, fans say 'National Award - DNA India",
      description:
        "Directed by Hansal Mehta, The Buckingham Murders will release in cinemas on September 13.",
      url: "https://www.dnaindia.com/bollywood/report-the-buckingham-murders-kareena-kapoor-is-held-forcibly-by-cops-in-first-look-poster-hansal-mehta-film-3095328",
      urlToImage:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2024/07/01/2639609-tbm3.jpg",
      publishedAt: "2024-07-01T13:22:19Z",
      content:
        "Directed by Hansal Mehta, The Buckingham Murders will release in cinemas on September 13.Headlined by Kareena Kapoor Khan and helmed by Hansal Mehta, the much-awaited film The Buckingham Murders will… [+1851 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI Entertainment Desk",
      title:
        "Sushmita Sen recalls her massive heart attack: 'Those 45 minutes felt like the longest of my life' - TOI Etimes",
      description:
        "Sushmita Sen recently revealed that the mention of her 'second date of birth' on her Instagram marks the day she endured a severe heart attack. She de",
      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/sushmita-sen-recalls-her-massive-heart-attack-those-45-minutes-felt-like-the-longest-of-my-life/articleshow/111408686.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-111409062,width-1070,height-580,imgsize-20292,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-07-01T13:16:00Z",
      content: null,
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI Entertainment Desk",
      title:
        "Yash Chopra's stammer gave birth to iconic 'K-K-K Kiran', Shah Rukh picked up the line, reveals Juhi Chaw - TOI Etimes",
      description:
        'In the realm of Bollywood, Shah Rukh Khan\'s iconic stammering confession "I love you K-K-K-Kiran" from the 1993 film Darr remains etched in cinematic',
      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/yash-chopras-stammer-gave-birth-to-iconic-k-k-k-kiran-shah-rukh-picked-up-the-line-reveals-juhi-chawla/articleshow/111408555.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-111408528,width-1070,height-580,imgsize-53010,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-07-01T12:51:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "The Statesman",
      },
      author: "Statesman Web",
      title:
        "Disha Patani and fashion forward: 5 unforgettable western outfits - The Statesman",
      description:
        "Discover Disha Patani's top 5 stunning western outfits that set fashion trends and inspire style enthusiasts everywhere.",
      url: "https://www.thestatesman.com/entertainment/bollywood/disha-patani-and-fashion-forward-5-unforgettable-western-outfits-1503315549.html",
      urlToImage:
        "https://www.thestatesman.com/wp-content/uploads/2024/07/Disha-Patani.jpg",
      publishedAt: "2024-07-01T09:01:00Z",
      content:
        "Disha Patani, a name synonymous with trendsetting, continues to captivate both on and off the big screen. Her fashion choices have set the bar high, proving she’s not just a talented actress but also… [+1998 chars]",
    },
    {
      source: {
        id: null,
        name: "Zoom",
      },
      author: "Grace Cyril",
      title:
        "Karan Kundrra And Tejasswi Prakash - Love or Just a Perfect Match Made For Brand Endorsements? - Times Now",
      description:
        "Forget Fairytales, Karan Kundrra and Tejasswi Prakash's love story is a brand's dream come true. After all, nothing is more striking than a joint endorsement deal. But, is that true in the Bigg Boss 15 couple's situation too?",
      url: "https://www.timesnownews.com/entertainment-news/tv/karan-kundrra-and-tejasswi-prakash-love-or-just-a-perfect-match-made-for-brand-endorsements-article-111398347",
      urlToImage:
        "https://static.tnn.in/thumb/msid-111398306,thumbsize-51564,width-1280,height-720,resizemode-75/111398306.jpg",
      publishedAt: "2024-07-01T08:05:25Z",
      content:
        "Horoscope Today: Astrological Predictions On July 3, 2024, for all Zodiac Signs",
    },
    {
      source: {
        id: null,
        name: "PINKVILLA",
      },
      author: "Jatinder Singh",
      title:
        "Jatt and Juliet 3 box office collections: Diljit starrer scores biggest weekend worldwide for Punjabi films - PINKVILLA",
      description:
        "The Opening Record Was Made Possible By The Record-breaking Start Overseas, Where The Diljit Dosanjh And Neeru Bajwa Starrer Crossed USD 3 Million Versus USD 2.43 Million Of Carry On Jatta 3",
      url: "https://www.pinkvilla.com/entertainment/box-office/jatt-and-juliet-3-box-office-collections-diljit-starrer-scores-biggest-weekend-worldwide-for-punjabi-films-1322806",
      urlToImage:
        "https://www.pinkvilla.com/images/2024-07/2106418930_jj-2.jpg",
      publishedAt: "2024-07-01T07:10:57Z",
      content:
        "Punjabi film Jatt and Juliet 3 scored the biggest opening weekend worldwide in industry history, beating Carry on Jatta 3. The film grossed Rs. 45 crore globally in its four-day weekend, with Rs. 19.… [+2137 chars]",
    },
  ];
  const [NewsList, setNewsList] = useState([]);
  const [Loading, setLoading] = useState(false);
  // console.log("dummy ::", dummy);
  async function fetchNews(pageSize = 100) {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props?.category}&pageSize=${pageSize}&apiKey=${apikey}`;
    const response = await fetch(url);
    const parsedData = await response.json();
    setLoading(false);
    setNewsList(parsedData?.articles);
    console.log("parsedData ::", parsedData);
    // return parsedData;
  }

  useEffect(() => {
    fetchNews();
  }, []);
  console.log(NewsList);
  return (
    <>
      <Row>
        {Loading ? (
          <Col md={12} className="my-5 text-center" >
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        ) : (
          NewsList?.length > 0 &&
          NewsList?.map((item, index) => (
            <Col md={6} className="mb-3" key={index}>
              <CardlistChild data={item} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default CardlistParent;