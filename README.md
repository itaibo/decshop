# Decshop

This is a test for creating a basic online shop using Next.js.

The online version can be accessed in https://decshop.vercel.app.

It consists of 3 main pages:

1. Home with search box:

- Route: `/`
- Description: Displays a search box for product searches. Upon searching, navigate to the Search Results view.

2. Search Results:

- Route: `/items?search=`, for example: `/items/?search=laptop`
- Description: Displays below the search box the number of results and the results for each category. Each result card should display: title, description, price, category, image, and rating.

3. Product Detail:

- Route: `/items/:id`
- Description: Shows the complete product description, including all details such as price, description, brand, stock, category, etc.

## SEO and performance

The application is optimized to be SEO friendly. It is server side rendered,
with very few elements rendered using the client.

The performance has been improved generating static routes for each product
in the build step. This means that the HTML for each product actually exists
and has been already generated to not calculate the pages on every request.

You can learn more in the [Next.js documentation](https://nextjs.org/docs/app/api-reference/functions/generate-static-params).

## API

The data from `products.json` can be accessed via API.

Access all products. Optionally pass a query to filter results:

```
GET /api/items?q=:query
```

Access one product using its ID:

```
GET /api/items/:id
```

## Tests

The application contains various tests for the database and utils functions
which are located in the `tests` folder.
