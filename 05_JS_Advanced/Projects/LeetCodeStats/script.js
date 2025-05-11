document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.querySelector("#username");
  const searchBtn = document.querySelector("#search_btn");
  const statContainer = document.querySelector(".stats");
  const easyQueContainter = document.querySelector(".easy_ques");
  const medQueContainter = document.querySelector(".med_ques");
  const hardQueContainter = document.querySelector(".hard_ques");
  const easyInfo = document.querySelector("#easy_info");
  const medInfo = document.querySelector("#med_info");
  const hardInfo = document.querySelector("#hard_info");
  const submited = document.querySelector(".submited");

  function validateUserName(username) {
    if (username.trim() === "") {
      alert("Username should not be emty!");
      return false;
    }

    const leetRegex = /^(?=.{1,30}$)(?![-_])[A-Za-z0-9_-]+(?<![-_])$/;
    const isValid = leetRegex.test(username);

    if (!isValid) {
      alert(`${username} is not a valid Username!`);
    }
    return isValid;
  }

  async function fetchUserData(username) {
    try {
      searchBtn.textContent = "Searching...";
      searchBtn.disabled = true;

      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const targetUrl = "https://leetcode.com/graphql/";

      const myHeaders = new Headers();
      myHeaders.append("content-type", "application/json");

      const graphql = JSON.stringify({
        query: `query userSessionProgress($username: String!) 
            {
                allQuestionsCount 
                {
                    difficulty
                    count
                }
                matchedUser(username: $username) 
                {
                    username
                    githubUrl
                    twitterUrl
                    linkedinUrl
                    profile 
                    {
                        realName
                        aboutMe
                        userAvatar
                        reputation
                        ranking
                    }
                    submitStats 
                    {
                        acSubmissionNum 
                        {
                            difficulty
                            count
                            submissions
                        }
                        totalSubmissionNum 
                        {
                            difficulty
                            count
                            submissions
                        }
                    }
                }
            }`,
        variables: { username: `${username}` },
      });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
      };

      const response = await fetch(proxyUrl + targetUrl, requestOptions);
      if (!response.ok) {
        throw new Error("Unable to fetch the User details");
      }
      const parsedData = await response.json();
      console.log("Logging data: ", parsedData);

      displayUserData(parsedData);
    } catch (error) {
      statContainer.innerHTML = `<h3>${error}</h3>`;
    } finally {
      searchBtn.textContent = "Search";
      searchBtn.disabled = false;
    }
  }

  function fillPragress(solved, total, container, info) {
    const progressValue = (solved / total) * 100;
    container.style.setProperty("--progress-value", `${progressValue}`);
    info.textContent = `${solved}/${total}`;
  }

  function displayUserData(parsedData) {
    const allQuestionsCount = parsedData.data.allQuestionsCount[0].count;
    const easyQuestionsCount = parsedData.data.allQuestionsCount[1].count;
    const medQuestionsCount = parsedData.data.allQuestionsCount[2].count;
    const hardQuestionsCount = parsedData.data.allQuestionsCount[3].count;

    const solvedTotalQues =
      parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
    const solvedTotalEasyQues =
      parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
    const solvedTotalMediumQues =
      parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
    const solvedTotalHardQues =
      parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

    const userName = parsedData.data.matchedUser.username;
    const githubUrl = parsedData.data.matchedUser.githubUrl;
    const twitterUrl = parsedData.data.matchedUser.twitterUrl;
    const linkedinUrl = parsedData.data.matchedUser.linkedinUrl;

    const realName = parsedData.data.matchedUser.profile.realName;
    const aboutMe = parsedData.data.matchedUser.profile.aboutMe;
    const userAvatar = parsedData.data.matchedUser.profile.userAvatar;
    const reputation = parsedData.data.matchedUser.profile.reputation;
    const ranking = parsedData.data.matchedUser.profile.ranking;

    const allSubmissionNum =
      parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions;
    const easySubmissionNum =
      parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions;
    const medSubmissionNum =
      parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions;
    const hardSubmissionNum =
      parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions;

    document.querySelector("#user_avatar").src = userAvatar;

    document.querySelector("#real_name").textContent = `${realName}`;

    document.querySelector("#user_name").textContent = `${userName}`;

    document.querySelector("#rank_no").textContent = ` ~ ${ranking}`;

    document
      .querySelector("#github_link")
      .style.setProperty("href", `${githubUrl}`);

    document
      .querySelector("#twitter_link")
      .style.setProperty("href", `${twitterUrl}`);

    document
      .querySelector("#linkedin_link")
      .style.setProperty("href", `${linkedinUrl}`);

    fillPragress(
      solvedTotalEasyQues,
      easyQuestionsCount,
      easyQueContainter,
      easyInfo
    );
    fillPragress(
      solvedTotalMediumQues,
      medQuestionsCount,
      medQueContainter,
      medInfo
    );
    fillPragress(
      solvedTotalHardQues,
      hardQuestionsCount,
      hardQueContainter,
      hardInfo
    );

    const submitedData = [
      { label: `Overall Submissions`, value: `${allSubmissionNum}` },
      { label: `Overall Easy Submissions`, value: `${easySubmissionNum}` },
      { label: `Overall Medium Submissions`, value: `${medSubmissionNum}` },
      { label: `Overall Hard Submissions`, value: `${hardSubmissionNum}` },
    ];

    console.log(submitedData);

    submited.innerHTML = submitedData
      .map(
        (data) =>
          `<div class="submited_card">
            <h4>${data.label}</h4>
            <p>${data.value}</p>
        </div>`
      )
      .join("");

    statContainer.style.display = "flex";
  }

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const username = usernameInput.value;

    if (validateUserName(username)) {
      fetchUserData(username);
    }

    usernameInput.value = "";
  });
});
