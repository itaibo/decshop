# Decshop

Must contain (mobile market):
- A search box
- The list of results
- Product detail description

Considerations:
- The application should be user-friendly and **visually appealing**. Feel free to copy the design or use a component catalog.
- **SEO for the application is VERY important**. So, Google's robot should be able to crawl our page smoothly, and the performance should be appropriate.
- We also want users to be able to share products on social media.

### Functionality

1. **3 pages**: Home with search box, search results, and detail.

2. **Page routes will be**:
  - Home with search box
    - Route: `/`
    - Description: Displays a search box for product searches. Upon searching, navigate to the Search Results view.
  
  - Search Results:
    - Route: `/items?search=`, for example: `/items/?search=laptop`
    - Description: Displays below the search box the number of results and the results for each category. Each result card should display: title, description, price, category, image, and rating.

  - Product Detail: "/items/:id"
    - Route: `/items/:id`
    - Description: Shows the complete product description, including all details such as price, description, brand, stock, category, etc. Displays all images. Also, include a button to make a purchase (even if it doesn't work).

3. **API**: Two endpoints based on the content of the `products.json` file, but you don't have to follow that schema. The endpoints to create are:
  - `/api/items?q=:query` where `:query` is the user's search. It should return a JSON with the data to be displayed in the list of items.
  - `/api/items/:id`, where `:id` is the selected product's id. It should return a JSON with the data of the selected item.

4. **Testing**: The application must have AT LEAST one test. Write the test you consider most important for your application.
