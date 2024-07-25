async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/dev-CarlosAndrey/portfolio/main/data/profile.json?token=GHSAT0AAAAAACVJ2NLMQ7AUXDL4CR2MXOUQZVCT5QA';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}