import {makeObservable, observable, action, computed} from 'mobx';

class AppContext {
  userInfo = {
    userId: '',
  };
  projectInfo = {
    projectId: '',
  };
  counterInfo = {
    count: 0,
  };

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      projectInfo: observable,
      counterInfo: observable,
      getUserInfo: computed,
      getProjectInfo: computed,
      getCurrentCount: computed,
      setUserInfo: action,
      setProjectInfo: action,
      countUp: action,
    });
  }

  get getUserInfo() {
    return this.userInfo;
  }
  get getProjectInfo() {
    return this.projectId;
  }

  get getCurrentCount() {
    return this.counterInfo.count;
  }

  countUp() {
    this.counterInfo.count++;
  }

  setUserInfo(targetUserInfo) {
    const {userId} = {...targetUserInfo};
    this.userInfo.userId = userId;
  }
  setProjectInfo(targetProjectInfo) {
    const {projectId} = {...targetProjectInfo};
    this.projectInfo.projectId = projectId;
  }
}

export {AppContext};
