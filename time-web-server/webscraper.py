from flask import Flask, request, jsonify
from bs4 import BeautifulSoup
import requests
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/scrapBlogs', methods=['POST'])
def scrap_blogs():
    data = request.json
    username = data.get('username')
    url = f"https://myanimelist.net/history/{username}"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}

    try:
        page_to_scrape = requests.get(url, headers=headers)
        page_to_scrape.raise_for_status()
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 400

    soup = BeautifulSoup(page_to_scrape.text, 'html.parser')
    authors = soup.find_all('div', attrs={'class': 'history_content_wrapper'})

    results = [author.text for author in authors]

    # Save the content to 'tempstorage.html'
    with open("C:\\Users\\explo\\OneDrive\\Documents\\PersonalGitHubRepos\\Time-Web-Project\\time-web-server\\tempstorage.html", "w", encoding="utf-8") as file:
        for author in authors:
            file.write(author.text + "\n")  # Extract text and write to file

    # Read the content from 'tempstorage.html'
    with open("C:\\Users\\explo\\OneDrive\\Documents\\PersonalGitHubRepos\\Time-Web-Project\\time-web-server\\tempstorage.html", "r", encoding="utf-8") as file:
        file_content = file.read()

    return jsonify({"results": results, "file_content": file_content})

if __name__ == '__main__':
    app.run(debug=True)