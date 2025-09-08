  const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const state = params.get("state");

    // Update title
    document.getElementById("jobTitle").innerText = `${category.charAt(0).toUpperCase() + category.slice(1)} Jobs in ${state}`;

    // Example Job Data (You can connect to API later)
    const jobs = [
      { title: "Senior Accountant", location: "CT", category: "accounting" },
      { title: "Junior Accountant", location: "CT", category: "accounting" },
      { title: "Finance Analyst", location: "FL", category: "finance" },
      { title: "Business Manager", location: "GA", category: "business" }
    ];

    // Filter jobs
    const filteredJobs = jobs.filter(job => job.location === state && job.category === category);

    const jobList = document.getElementById("jobList");

    if (filteredJobs.length > 0) {
      filteredJobs.forEach(job => {
        const div = document.createElement("div");
        div.className = "job-card";
        div.innerHTML = `<h3>${job.title}</h3><p>Location: ${job.location}</p>`;
        jobList.appendChild(div);
      });
    } else {
      jobList.innerHTML = "<p>No jobs found for this selection.</p>";
    }

    console.log("hello world");