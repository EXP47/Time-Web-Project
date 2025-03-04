from bs4 import BeautifulSoup
import requests

def scrapBlogs():
    url = "https://myanimelist.net/history/rchowd"
    pageToScrape = requests.get(url)
    soup = BeautifulSoup(pageToScrape.text, 'html.parser')
    authors = soup.find_all('div', attrs={'class': 'history_content_wrapper'})

    for author in authors:
        print(author.text)

scrapBlogs()