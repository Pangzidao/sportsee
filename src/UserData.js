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

export const getUserData = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}`)
    const { data } = await response.json()

    return new UserData(data.userInfos, data.todayScore, data.keyData)
}

export const getUserActivity = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}/activity`)
    const { data } = await response.json()
    const formatedDataActivity = []
    data.sessions.map((session, index) => formatedDataActivity.push(new UserActivity(index, session.kilogram, session.calories)))
    return formatedDataActivity
}

export const getUserSession = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    const { data } = await response.json()
    const days = ["l", "m","m","j","v","s","d"]
    const formatedDataSessions = []
    data.sessions.map((session, index) => formatedDataSessions.push(new UserSession(days[index], session.sessionLength)))
    return formatedDataSessions
}


