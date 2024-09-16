# Env Loader

## Objective:
Load environment variables using Postgres SQL database to save AWS Secret Manager's Cost

## Configuration
### Configuration
Change the configuration to connect database in .env file
<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
      <th>Comments</th>
    </tr>
  </thead>
  <tbody>
     <tr>
      <td>
        ENV_KEY
      </td>
      <td>
        LOCAL
      </td>
      <td>
        ENV_KEY according to your requirement
      </td>
    </tr>
    <tr>
      <td>
        PORT
      </td>
      <td>
        80
      </td>
      <td>
        Port can be changed
      </td>
    </tr>
    <tr>
      <td>
        PG_DB_HOST
      </td>
      <td>
        127.0.0.1
      </td>
      <td>
        Database host can be changed
      </td>
    </tr>
    <tr>
      <td>
        PG_DB_PORT
      </td>
      <td>
        5432
      </td>
      <td>
        Database port can be changed
      </td>
    </tr>
    <tr>
      <td>
        PG_DB_USER
      </td>
      <td>
        postgres
      </td>
      <td>
        Database Username can be changed
      </td>
    </tr>
    <tr>
      <td>
        PG_DB_PASS
      </td>
      <td>
        <strike>postgres123</strike>
      </td>
      <td>
        Database Password can be changed
      </td>
    </tr>
    <tr>
      <td>
        PG_DB_NAME
      </td>
      <td>
        postgres
      </td>
      <td>
        Database Name can be changed
      </td>
    </tr>
  </tbody>
</table>

