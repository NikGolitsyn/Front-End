// input JSON string
// output result or null

const parseUser = JSONstring => {
  try {
    return JSON.parse(JSONstring);
  } catch (error) {
    return null;
  }
};
