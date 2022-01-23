<?php

/*
   * Enter yout ptoject url. For example: http://127.0.0.1/celebify
*/
$url = 'http://127.0.0.1/celebify';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="theme-color" content="#6a1fb7"/>
    <title>Celebify</title>
    <link rel="stylesheet" href="./assets/css/style.css"/>
    <link rel="stylesheet" href="./assets/css/normalize.css"/>
    <link rel="stylesheet" href="./assets/css/nprogress.css"/>
    <script src="./assets/js/nprogress.js"></script>
</head>
<body>
    <script>
        NProgress.start();
    </script>

    <div class="dot-player">
        <video id="dotVideo">
            <source src="<?php echo $url ?>/assets/video/happier.mp4" type="video/mp4" />
        </video>
    </div>

    <div class="music">
        <div class="musicCloseBtn">
            <a href="#"></a>
        </div>
        <div class="musicContainer">
            <img src="./assets/image/spotify.svg"/>
            <div class="musicContent">
                <h2>
                    دنیای موزیک سلبیفای!
                </h2>
                <p>
                    با عضویت در کانال تلگرامی ما به موزیک های جدید و تازه ریلز شده دسترسی داشته باشید!
                </p>
                <button class="btnShowChannel"><a href="#">عضویت در کانال</a></button>
            </div>
        </div>
    </div>

    <header class="header">

        <nav class="navbar">
            <div class="hamburger" id="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

            <a class="logo" href="https://celebify.ir">
                <img id="imgLogo" src="./assets/image/header-logo.svg" alt="celebify logo"/>
            </a>

            <ul id="navlink">
                <li id="close">
                    <a href="#"></a>
                </li>
                <li>
                    <a href="#" class="active">صفحه اصلی</a>
                    <span class="dot">
                        
                    </span>
                </li>
                <li><a href="#">مقالات</a></li>
                <li><a href="#">سلبیفای</a></li>
            </ul>

            <form>

                <div class="search-box">
                    <input type="text" name="search" placeholder="جستجو"/>
                    <button><i class="icon-search"></i></button>
                </div>
                
            </form>
        </nav>

    </header>

    <main class="main-container">

        <section class="header-slide" dir="ltr" onmouseover="CardsMouseOverEvent()" onmouseout="CardsMouseOutEvent()">

            <div  id="tab" class="tab">
                <i  class="icon-chevron-left"></i>
            </div>

            <div class="left-card" onmouseout="CardsMouseOutEvent()" >
                <img src="./assets/image/bled.svg"/>
            </div>

            <div class="right-card fade-up-right hidden" data-image="<?php echo $url . '/assets/image/image.jpg' ?>">
                <div class="cover"></div>
                <img src="./assets/image/bled.svg"/>
                <div class="container">

                    <h1>
                        BILLBOARD
                    </h1>

                    <p>
                        چارت هفتگی
                        <br>
                        <strong>صد آهنگ برتر بیلبورد</strong>
                    </p>

                    <button class="btn-show-article"><a href="#">مشاهده چارت</a></button>

                </div>
            </div>

            <div class="right-card fade-up-right hidden" data-image="<?php echo $url . '/assets/image/weeknd.jpg' ?>">
                <div class="cover"></div>
                <img src="./assets/image/bled.svg"/>
                <div class="container">

                    <h1>
                        BILLBOARD
                    </h1>

                    <p>
                        چارت هفتگی
                        <br>
                        <strong>صد آهنگ برتر بیلبورد</strong>
                    </p>

                    <button class="btn-show-article"><a href="#">مشاهده چارت</a></button>

                </div>
            </div>

            <div class="right-card fade-up-right hidden" data-image="<?php echo $url . '/assets/image/taylor.jpg' ?>">
                <div class="cover"></div>
                <img src="./assets/image/bled.svg"/>
                <div class="container">

                    <h1>
                        BILLBOARD
                    </h1>

                    <p>
                        چارت هفتگی
                        <br>
                        <strong>صد آهنگ برتر بیلبورد</strong>
                    </p>

                    <button class="btn-show-article"><a href="#">مشاهده چارت</a></button>

                </div>
            </div>

            <div class="right-card fade-up-right hidden" data-image="<?php echo $url . '/assets/image/gaga.jpg' ?>">
                <div class="cover"></div>
                <img src="./assets/image/bled.svg"/>
                <div class="container">

                    <h1>
                        BILLBOARD
                    </h1>

                    <p>
                        چارت هفتگی
                        <br>
                        <strong>صد آهنگ برتر بیلبورد</strong>
                    </p>

                    <button class="btn-show-article"><a href="#">مشاهده چارت</a></button>

                </div>
            </div>

            <div class="slider-dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>

        </section>

        <section class="main-section">

            <div class="row main">
                <div class="title">
                    <p>
                    جدیدترین ها
                    </p>
                    <span>
                        <a href="">بیشتر</a>
                    </span>
                </div>

                <div class="articles">
                <article class="row-article">
                        <div class="image-cover">
                            <img class="row-image" src="./assets/image/image.jpg" loading="lazy" alt="image name"/>
                            <div class="bg">
                                <div class="tag">
                                    تگ مقاله
                                </div>
                                <div class="author-name">
                                    <p>
                                        نویسنده
                                    </p>
                                    <h6>
                                            محمد فلاحی
                                    </h6>
                                </div>
                            </div>
                            <div class="author"></div>
                        </div>
                        <div class="content">
                            <h6>
                                دوشنبه سیزده تیر
                            </h6>
                            <h3>
                                <a href="#">عنوان مقاله عنوان مقاله عنوان مقاله عنوان مقاله عنوان مقاله عنوان مقاله </a>
                            </h3>
                        </div>
                    </article>
                </div>

                
            </div>

        </section>
    </main>

    <script async src="./assets/js/app.js"></script>

    <script>
        NProgress.done();
    </script>

</body>
</html>