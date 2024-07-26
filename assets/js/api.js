async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/dev-CarlosAndrey/portfolio/main/data/profile.json?token=GHSAT0AAAAAACVJ2NLMBYUPKLL5VBPSD6TMZVDS7RA';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}