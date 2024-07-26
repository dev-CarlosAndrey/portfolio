async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/dev-CarlosAndrey/portfolio/main/data/profile.json?token=GHSAT0AAAAAACVJ2NLMEXV6DBYAN5RJ4HGEZVDSIPA';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}