from splinter import Browser
from bs4 import BeautifulSoup
import requests
import pandas as pd
import pymongo
import time
import os


def init_browser():
    currentDirectory = os.path.dirname(__file__)
    executable_path = {"executable_path": f"{currentDirectory}\chromedriver.exe"}
    return Browser("chrome", **executable_path, headless=True)


def get_soup(urlink):
    browser = init_browser()
    browser.visit(urlink)
    time.sleep(5)
    browser.html
    html = browser.html
    return BeautifulSoup(html, 'lxml')
     
def scrape_news():
    soup = get_soup('https://mars.nasa.gov/news/')
    news = soup.find('ul', class_='item_list')
    articles = news.find_all('li', class_='slide')
    art = []
    for article in articles:
        arti = {}
        arti['news_title'] = article.find('div', class_='content_title').a.text
        arti['news_p'] = article.find('div', class_='article_teaser_body').text
        art.append(arti)
    return art

def scrape_featured_images():
    base_image_url = 'https://www.jpl.nasa.gov'
    target_image_url = f'{base_image_url}/spaceimages/?search=&category=Mars'
    soup = get_soup(target_image_url)
    image_art = soup.find('ul', class_='articles')
    images = image_art.find_all('li', class_='slide')
    img_list = []
    for image in images:
        img = {}
        img['img_url'] = f"{base_image_url}{image.a['data-fancybox-href']}"
        img_list.append(img)
    return img_list

def scrape_weather():
    response = requests.get('https://twitter.com/marswxreport')
    soup = BeautifulSoup(response.text, 'html.parser')
    tweets_div = soup.find_all('p', class_="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text")
    tweet_list = []
    for tweet in tweets_div:
        twt = {}
        if tweet.text.startswith("InSight sol", 0):
            twt['weather'] = tweet.text
            tweet_list.append(twt)
    return tweet_list

def scrape_facts():
    facts_site = pd.read_html("https://space-facts.com/mars/")
    time.sleep(3)
    mars_df = pd.DataFrame(facts_site[0])
    mars_df.set_index(0)
    new_dict = {}
    for row in mars_df.iterrows():
        new_dict[row[1][0]] = row[1][1]
    return dict(new_dict)


def scrape_hemispheres_images():
    usgs_image_url = 'https://astropedia.astrogeology.usgs.gov'
    base_image_url = 'https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars'
    soup = get_soup(base_image_url)
    pic_links = soup.find_all('a', class_="itemLink")
    hemisphere_image_urls = []
    for pic in pic_links:
        img = {}
        if pic.h3:
            img['title'] = pic.h3.text
            img['img_url'] = usgs_image_url + \
                pic['href'].replace(
                    '/search/map/', '/download/') + '.tif/full.jpg'
            hemisphere_image_urls.append(img)
    return hemisphere_image_urls
