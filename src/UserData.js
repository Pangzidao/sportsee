class UserData{
   constructor(userInfos, todayScore, keyData){
    this.userInfos = userInfos
    this.todayScore = todayScore
    this.keyData = keyData
   }
}

class UserActivity{
    constructor(day, kilogram, calories){
        this.day = day
        this.kilogram = kilogram
        this.calories = calories
    }
}

class UserSession{
    constructor(day, minutes){
        this.day = day
        this.minutes = minutes
    }
}

class UserPerformance{
    constructor(subject, value, fullValue){
        this.subject = subject
        this.value = value
        this.fullValue = fullValue
    }
}

export const getUserData = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}`)
    const { data } = await response.json()

    return new UserData(data.userInfos, data.todayScore || data.score, data.keyData)
}

export const getUserActivity = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}/activity`)
    const { data } = await response.json()
    const formatedDataActivity = []
    data.sessions.map((session, index) => formatedDataActivity.push(new UserActivity(session.day.charAt(session.day.length - 1), session.kilogram, session.calories)))
    return formatedDataActivity
}

export const getUserSession = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    const { data } = await response.json()
    const days = ["l", "m","m","j","v","s","d"]
    const formatedDataSessions = []
    data.sessions.map((session, index) => formatedDataSessions.push(new UserSession(days[index].toUpperCase(), session.sessionLength)))
    return formatedDataSessions
}

export const getUserPerformance = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}/performance`)
    const { data } = await response.json()
    const userPerformances = []
    data.data.map((p) => p.kind = data.kind[p.kind])
    data.data.forEach((d) => userPerformances.push(new UserPerformance(d.kind, d.value, 250)))
    return userPerformances
}
