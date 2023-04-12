# Understanding Application APIs

The Theme Builder server serves the React application at the `/` endpoint.

The APIs are under the `/api/` endpoint, with the following apis available:

### /api/themes?metadata - Get list of all themes or metadata for all themes
- **Method**: GET
- **Returns**: Array of theme names
- **Return Errors**: None
- **Example**: GET /api/themes => [ "theme1", "theme2" ]
- **Example**: GET /api/themes?metadata => [ {id:"theme1", metadata:{..}}, {id:"theme2", metadata: {..}} ]

### /api/themes - Create a new theme
- **Method**: POST
- **Body**: Theme object
- **Returns**: Theme object
- **Return Errors**: 500, 501 invalid document, 502 document already exists
- **Example**: POST /api/themes { id:"theme3", key1:themeData} => { id:"theme3", key1:themeData}

### /api/themes - Delete all themes (This deletes the database, so use with caution)
- **Method**: DELETE
- **Returns**: returns boolean (true=success, false=fail)
- **Return Errors**: none
- **Example**: DELETE /api/themes => true

### /api/themes/:id - Get a theme and return all fields
- **Method**: GET
- **Returns**: Theme object
- **Return Errors**: 404 document :id was not found, 500
- **Example**: GET /api/themes/theme5 => { id:"theme5", key1:themeData}

### /api/themes/:id?fields=field1,field2,... - Get a theme and return only fields
- **Method**: GET
- **Returns**: Partial theme object
- **Return Errors**: 404 document :id was not found, 500
- **Example**: GET /api/themes/theme5?field=key1 => {key1:themeData}

### /api/themes/:id?returnDoc=true - Update a theme or fields of a theme
- **Method**: PUT
- **Body**: Theme object or {?set: Partial theme object}
- **Returns**: If returnDoc, then return Theme object, else return true
- **Return Errors**: 404 document :id was not found, 500
- **Example**: PUT /api/themes/theme5 {key2:{subkey1: updatedSubData1}} => true
- **Example**: PUT /api/themes/theme5?returnDoc=true {key2:{subkey1: updatedSubData1}} => {id:"theme5", key2:{subkey1: updatedSubData1}
- **Example**: PUT /api/themes/theme5?returnDoc=true {?set: {"key2.subkey1": updatedSubData1}}} => {id:"theme5", key1:themeData, key2:{subkey1: updatedSubData1}

### /api/themes/:id - Delete a theme
- **Method**: DELETE
- **Returns**: Theme object
- **Return Errors**: 404 document :id was not found, 500
- **Example**: DELETE /api/themes/theme5 => { id:"theme5", key1:themeData}
