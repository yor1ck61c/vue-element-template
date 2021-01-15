<template>
  <el-container>
    <el-header style="margin-top: 30px">
      <el-form :inline="true" :model="SearchInfo" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="SearchInfo.ResidentName" placeholder="姓名" style="width:150px" />
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="SearchInfo.StartTime"
            type="date"
            placeholder="开始日期"
            style="width:150px"
          />
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="SearchInfo.EndTime"
            type="date"
            placeholder="结束日期"
            style="width:150px"
          />
        </el-form-item>
        <el-form-item>
          <el-select v-model="SearchInfo.ContractStatus" placeholder="请选择合同状态" style="width:150px">
            <el-option label="血压" value="血压" />
            <el-option label="二级" value="二级" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="SearchInfo.DoctorName" placeholder="建档医生" style="width:150px" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="SearchInfo.SignLocation" placeholder="建档机构" style="width:150px" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addResident=true">居民建档</el-button>
        </el-form-item>
      </el-form>
      <el-dialog title="居民建档" :visible.sync="addResident" custom-class="customWidth">
        <el-container>
          <el-main>
            <el-row>
              <div style="width: 100%;margin-top: 10px;margin-bottom: 10px;text-align: center; font-size: 24px">个人基本信息表</div>
              <div style="width: 100%;margin-top: 10px;margin-bottom: 10px;"> <span style="margin-left: 10px"> * 姓名:</span>
                <span>
                  <input v-model="CPatientDto.PatientName">
                </span>
                <span style="float: right;margin-right: 10px;"> 编号：
                  <input v-model="CPatientDto.PatientID">
                </span>
              </div>
            </el-row>
            <el-row>
              <table width="100%" border="1">
                <tbody>
                  <tr>
                    <td width="10%">&nbsp;*身份证号</td>
                    <td><input v-model="CPatientDto.IDCard" type="text" style="width: 100%"></td>
                    <td width="10%">&nbsp;*性别</td>
                    <td>
                      <input id="unknown" v-model="CPatientDto.Gender" name="Gender" type="radio" value="unknownGender">
                      <label for="unknown">0 未知的性别</label>
                      <input id="male" v-model="CPatientDto.Gender" name="Gender" type="radio" value="male">
                      <label for="male">1 男性</label>
                      <input id="female" v-model="CPatientDto.Gender" name="Gender" type="radio" value="female">
                      <label for="female">2 女性</label>
                      <input id="unDescribe" v-model="CPatientDto.Gender" name="Gender" type="radio" value="unDescribe">
                      <label for="unDescribe">9 未说明的性别</label>
                      <span style="float: right;margin-right: 5px" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table width="100%" border="1">
                <tbody>
                  <tr>
                    <td width="10%">&nbsp;*出生日期</td>
                    <td><input v-model="CPatientDto.Birthday" type="date" style="width: 100%"></td>
                    <td width="10%">&nbsp;*常住类型</td>
                    <td>
                      <div>
                        <input id="registered" name="Nationality" type="radio" value="户籍">
                        <label for="registered">1 户籍</label>
                        <input id="unRegistered" name="Nationality" type="radio" value="非户籍">
                        <label for="unRegistered">2 非户籍</label>
                      </div>

                    </td>
                    <td width="10%">&nbsp;民族</td>
                    <td>
                      <select v-model="CPatientDto.Nationality" style="width: 100%;">
                        <option>汉族</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;*本人电话</td>
                    <td><input v-model="CPatientDto.PhoneNumber" style="width: 100%"></td>
                    <td>&nbsp;联系人姓名</td>
                    <td><input v-model="CPatientDto.EmergencyContact" style="width: 100%"></td>
                    <td>&nbsp;联系人电话</td>
                    <td><input v-model="CPatientDto.EmergencyPhoneNumber" style="width: 100%"></td>
                  </tr>
                </tbody>
              </table>
              <table width="100%" border="1">
                <tbody>
                  <tr>
                    <td width="10%">&nbsp;户籍地址</td>
                    <td>
                      <input v-model="CPatientDto.ResidenceAddress" style="width: 100%">
                    </td>
                    <td width="10%">&nbsp;现住址</td>
                    <td>
                      <input v-model="CPatientDto.CurrentAddress" style="width: 100%">
                    </td>
                  </tr>
                </tbody>
              </table>
              <table width="100%" border="1">
                <tbody>
                  <tr>
                    <td width="10%">&nbsp;血型</td>
                    <td>
                      <input id="AType" v-model="CPatientDto.BloodType" name="BloodType" value="A" type="radio">
                      <label for="AType">1.A型</label>
                      <input id="BType" v-model="CPatientDto.BloodType" name="BloodType" value="B" type="radio">
                      <label for="BType">2.B型</label>
                      <input id="OType" v-model="CPatientDto.BloodType" name="BloodType" value="O" type="radio">
                      <label for="OType">3.O型</label>
                      <input id="ABType" v-model="CPatientDto.BloodType" name="BloodType" value="AB" type="radio">
                      <label for="ABType">4.AB型</label>
                      <input id="unknownType" v-model="CPatientDto.BloodType" name="BloodType" value="unknownType" type="radio">
                      <label for="unknownType">5.不详</label>

                      <span style="margin-left: 10px;margin-right: 10px">/</span>

                      <span>RH:</span>
                      <input id="positive" v-model="CPatientDto.RH_Type" name="RH_Type" value="阳性" type="radio">
                      <label for="positive">1.阳性</label>
                      <input id="negative" v-model="CPatientDto.RH_Type" name="RH_Type" value="阴性" type="radio">
                      <label for="negative">2.阴性</label>
                      <input id="unknownRH_Type" v-model="CPatientDto.RH_Type" name="RH_Type" value="不详" type="radio">
                      <label for="unknownRH_Type">3.不详</label>

                      <span style="float: right; margin-right: 5px" />
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;婚姻状况</td>
                    <td>
                      <input id="unMarried" v-model="CPatientDto.Marriage" name="married" type="radio" value="未婚">
                      <label for="unMarried">1.未婚</label>
                      <input id="Married" v-model="CPatientDto.Marriage" name="married" type="radio" value="已婚">
                      <label for="Married">2.已婚</label>
                      <input id="lostCompanion" v-model="CPatientDto.Marriage" name="married" type="radio" value="丧偶">
                      <label for="lostCompanion">3.丧偶</label>
                      <input id="divorce" v-model="CPatientDto.Marriage" name="married" type="radio" value="离婚">
                      <label for="divorce">4.离婚</label>
                      <input id="unDescribeMarriage" v-model="CPatientDto.Marriage" name="married" type="radio" value="未说明的婚姻状况">
                      <label for="unDescribeMarriage">5.未说明的婚姻状况</label>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;文化程度</td>
                    <td>
                      <input id="postgraduate" v-model="CPatientDto.EducationLevel" type="radio" name="EducationLevel" value="研究生">
                      <label for="postgraduate">1.研究生</label>
                      <input id="college" v-model="CPatientDto.EducationLevel" type="radio" name="EducationLevel" value="大学本科">
                      <label for="college">2.大学本科</label>
                      <input id="JuniorCollege" v-model="CPatientDto.EducationLevel" type="radio" name="EducationLevel" value="大学专科和专科院校">
                      <label for="JuniorCollege">3.大学专科和专科院校</label>
                      <input id="Technical secondary school" v-model="CPatientDto.EducationLevel" type="radio" name="EducationLevel" value="中等专业学校">
                      <label for="Technical secondary school">4.中等专业学校</label>
                      <input id="Technical school" v-model="CPatientDto.EducationLevel" type="radio" name="EducationLevel" value="技工学校">
                      <label for="Technical school">5.技工学校</label>
                      <input id="highSchool" v-model="CPatientDto.EducationLevel" type="radio" name="EducationLevel" value="高中">
                      <label for="highSchool">6.高中</label>
                      <input id="junior middle school" v-model="CPatientDto.EducationLevel" type="radio" name="EducationLevel" value="初中">
                      <label for="junior middle school">7.初中</label>
                      <input id="primarySchool" v-model="CPatientDto.EducationLevel" type="radio" name="EducationLevel" value="小学">
                      <label for="primarySchool">8.小学</label>
                      <input id="illiteracy" v-model="CPatientDto.EducationLevel" type="radio" name="EducationLevel" value="文盲和半文盲">
                      <label for="illiteracy">9.文盲和半文盲</label><br>
                      <input id="unknownEducationLevel" v-model="CPatientDto.EducationLevel" type="radio" name="EducationLevel" value="不详">
                      <label for="unknownEducationLevel">10.不详</label>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;职业</td>
                    <td>
                      <input id="p0" v-model="CPatientDto.Profession" type="radio" name="Profession" value="国家机关、党群组织、企业、事业单位负责人">
                      <label for="p0">0.国家机关、党群组织、企业、事业单位负责人</label>
                      <input id="p1" v-model="CPatientDto.Profession" type="radio" name="Profession" value="专业技术人员">
                      <label for="p1">1.专业技术人员</label>
                      <input id="p2" v-model="CPatientDto.Profession" type="radio" name="Profession" value="办事人员和有关人员">
                      <label for="p2">2.办事人员和有关人员</label>
                      <input id="p3" v-model="CPatientDto.Profession" type="radio" name="Profession" value="商业、服务业人员">
                      <label for="p3">3.商业、服务业人员</label><br>
                      <input id="p4" v-model="CPatientDto.Profession" type="radio" name="Profession" value="农、林、牧、渔、水利业生产人员">
                      <label for="p4">4.农、林、牧、渔、水利业生产人员</label>
                      <input id="p5" v-model="CPatientDto.Profession" type="radio" name="Profession" value="生产、运输设备操作人员及有关人员">
                      <label for="p5">5.生产、运输设备操作人员及有关人员</label>
                      <input id="p6" v-model="CPatientDto.Profession" type="radio" name="Profession" value="军人">
                      <label for="p6">6.军人</label>
                      <input id="p7" v-model="CPatientDto.Profession" type="radio" name="Profession" value="不便分类的其他从业人员">
                      <label for="p7">7.不便分类的其他从业人员</label>
                      <input id="p8" v-model="CPatientDto.Profession" type="radio" name="Profession" value="无职业">
                      <label for="p8">8.无职业</label>
                    </td>
                  </tr>
                  <tr>
                    <td>医疗费用<br>
                      支付方式
                    </td>
                    <td>
                      <input id="pw1" v-model="CPatientDto.PayWay" type="radio" name="PayWay" value="城镇职工基本医疗保险">
                      <label for="pw1">1.城镇职工基本医疗保险</label>
                      <input id="pw2" v-model="CPatientDto.PayWay" type="radio" name="PayWay" value="城镇居民基本医疗保险">
                      <label for="pw2">2.城镇居民基本医疗保险</label>
                      <input id="pw3" v-model="CPatientDto.PayWay" type="radio" name="PayWay" value="新型农村合作医疗">
                      <label for="pw3">3.新型农村合作医疗</label>
                      <input id="pw4" v-model="CPatientDto.PayWay" type="radio" name="PayWay" value="贫困救助">
                      <label for="pw4">4.贫困救助</label>
                      <input id="pw5" v-model="CPatientDto.PayWay" type="radio" name="PayWay" value="商业医疗保险">
                      <label for="pw5">5.商业医疗保险</label>
                      <input id="pw6" v-model="CPatientDto.PayWay" type="radio" name="PayWay" value="全公费">
                      <label for="pw6">6.全公费</label>
                      <input id="pw7" v-model="CPatientDto.PayWay" type="radio" name="PayWay" value="全自费">
                      <label for="pw7">7.全自费</label><br>
                      <span>8.其他
                        <input id="pw8" v-model="CPatientDto.OtherPayWay" name="PayWay">
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;药物过敏史</td>
                    <td>
                      <input id="alg0" v-model="CPatientDto.MedicineAllergyHistoryList" type="checkbox" value="无">
                      <label for="alg0">0.无</label>
                      <input id="alg1" v-model="CPatientDto.MedicineAllergyHistoryList" type="checkbox" value="青霉素类抗生素">
                      <label for="alg1">101.青霉素类抗生素</label>
                      <input id="alg2" v-model="CPatientDto.MedicineAllergyHistoryList" type="checkbox" value="磺胺类抗生素">
                      <label for="alg2">102.磺胺类抗生素</label>
                      <input id="alg3" v-model="CPatientDto.MedicineAllergyHistoryList" type="checkbox" value="头孢类抗生素">
                      <label for="alg3">103.头孢类抗生素</label>
                      <input id="alg4" v-model="CPatientDto.MedicineAllergyHistoryList" type="checkbox" value="含碘药品">
                      <label for="alg4">104.含碘药品</label>
                      <input id="alg5" v-model="CPatientDto.MedicineAllergyHistoryList" type="checkbox" value="酒精">
                      <label for="alg5">105.酒精</label>
                      <input id="alg6" v-model="CPatientDto.MedicineAllergyHistoryList" type="checkbox" value="镇定麻醉剂">
                      <label for="alg6">106.镇定麻醉剂</label><br>
                      <span style="margin-left: 10px">107.其他药物过敏源
                        <input v-model="CPatientDto.OtherMedicineAllergySource" style="margin-left: 5px">
                      </span>
                      <input id="alg7" v-model="CPatientDto.FoodAllergyHistoryList" type="checkbox" name="allergy" value="猪肉">
                      <label for="alg7">1.猪肉</label>
                      <input id="alg8" v-model="CPatientDto.FoodAllergyHistoryList" type="checkbox" name="allergy" value="羊肉">
                      <label for="alg8">2.羊肉</label>
                      <input id="alg9" v-model="CPatientDto.FoodAllergyHistoryList" type="checkbox" name="allergy" value="牛肉">
                      <label for="alg9">3.牛肉</label>
                      <input id="alg10" v-model="CPatientDto.FoodAllergyHistoryList" type="checkbox" name="allergy" value="牛奶">
                      <label for="alg10">4.牛奶</label>
                      <input id="alg11" v-model="CPatientDto.FoodAllergyHistoryList" type="checkbox" name="allergy" value="蛋及蛋制品">
                      <label for="alg11">5.蛋及蛋制品</label>
                      <input id="alg12" v-model="CPatientDto.FoodAllergyHistoryList" type="checkbox" name="allergy" value="鸡、鸭等禽类食品">
                      <label for="alg12">6.鸡、鸭等禽类食品</label><br>
                      <input id="alg13" v-model="CPatientDto.FoodAllergyHistoryList" type="checkbox" name="allergy" value="鱼、虾等水产类食品">
                      <label for="alg13">7.鱼、虾等水产类食品</label>
                      <input id="alg14" v-model="CPatientDto.FoodAllergyHistoryList" type="checkbox" name="allergy" value="水果（包括带壳的果仁）">
                      <label for="alg14">8.水果（包括带壳的果仁）</label>
                      <span style="margin-left: 10px">299.其他食物过敏源
                        <input v-model="CPatientDto.OtherFoodAllergyHistoryList" style="margin-left: 5px">
                      </span><br>
                      <input id="alg15" v-model="CPatientDto.EnvironmentAllergyHistoryList" type="checkbox" name="allergy" value="植物花粉">
                      <label for="alg15">301.植物花粉</label>
                      <input id="alg16" v-model="CPatientDto.EnvironmentAllergyHistoryList" type="checkbox" name="allergy" value="动物毛发">
                      <label for="alg16">302.动物毛发</label>
                      <input id="alg17" v-model="CPatientDto.EnvironmentAllergyHistoryList" type="checkbox" name="allergy" value="空气粉尘">
                      <label for="alg17">303.空气粉尘</label>
                      <span style="margin-left: 10px;">399.其他环境过敏源
                        <input v-model="CPatientDto.OtherEnvironmentAllergyHistoryList" style="margin-left: 5px">
                      </span><br>
                      <span style="margin-left: 10px">4.混合型过敏原
                        <input v-model="CPatientDto.MixedAllergyHistoryList" style="margin-left: 5px">
                      </span>
                      <span style="margin-left: 10px">9.其他过敏原
                        <input v-model="CPatientDto.OtherAllergyHistoryList" style="margin-left: 5px">
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;暴露史</td>
                    <td>
                      <input id="exp1" v-model="CPatientDto.ExposedHistory" type="checkbox" name="expose" value="无">
                      <label for="exp1">1.无</label>
                      <input id="exp2" v-model="CPatientDto.ExposedHistory" type="checkbox" name="expose" value="化学品">
                      <label for="exp2">2.化学品</label>
                      <input id="exp3" v-model="CPatientDto.ExposedHistory" type="checkbox" name="expose" value="毒物">
                      <label for="exp3">3.毒物</label>
                      <input id="exp4" v-model="CPatientDto.ExposedHistory" type="checkbox" name="expose" value="射线">
                      <label for="exp4">4.射线</label>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table border="1">
                <tr>
                  <td width="10%">
                    既往史
                  </td>
                  <td width="90%">
                    <table border="1">
                      <tbody>
                        <tr>
                          <td width="10%">&nbsp;疾病</td>
                          <td>
                            <input id="dis1" v-model="CPatientDto.DiseaseHistory" type="checkbox" name="disease" value="无">
                            <label for="dis1">1.无</label>
                            <input id="dis2" v-model="CPatientDto.DiseaseHistory" type="checkbox" name="disease" value="高血压">
                            <label for="dis2">2.高血压</label>
                            <input id="dis3" v-model="CPatientDto.DiseaseHistory" type="checkbox" name="disease" value="糖尿病">
                            <label for="dis3">3.糖尿病</label>
                            <input id="dis4" v-model="CPatientDto.DiseaseHistory" type="checkbox" name="disease" value="冠心病">
                            <label for="dis4">4.冠心病</label>
                            <input id="dis5" v-model="CPatientDto.DiseaseHistory" type="checkbox" name="disease" value="慢性阻塞性肺疾病病">
                            <label for="dis5">5.慢性阻塞性肺疾病</label>
                            <input id="dis6" v-model="CPatientDto.DiseaseHistory" type="checkbox" name="disease" value="恶性肿瘤">
                            <label for="dis6">6.恶性肿瘤</label>
                            <input id="dis7" v-model="CPatientDto.DiseaseHistory" type="checkbox" name="disease" value="脑卒中">
                            <label for="dis7">7.脑卒中</label>
                            <input id="dis8" v-model="CPatientDto.DiseaseHistory" type="checkbox" name="disease" value="严重精神障碍">
                            <label for="dis8">8.严重精神障碍</label>
                            <input id="dis9" v-model="CPatientDto.DiseaseHistory" type="checkbox" name="disease" value="结核病">
                            <label for="dis9">9.结核病</label>
                            <input id="dis10" v-model="CPatientDto.DiseaseHistory" type="checkbox" name="disease" value="肝炎">
                            <label for="dis10">10.肝炎</label>
                            <input id="dis11" v-model="CPatientDto.DiseaseHistory" type="checkbox" name="disease" value="其他法定传染病">
                            <label for="dis11">11.其他法定传染病</label>
                            <input id="dis12" v-model="CPatientDto.DiseaseHistory" type="checkbox" name="disease" value="职业病">
                            <label for="dis12">12.职业病</label>
                            <span>
                              13.其他
                              <input id="dis13" v-model="CPatientDto.OtherDiseaseHistory" type="text" name="disease">
                            </span>

                          </td>
                        </tr>
                        <tr>
                          <td>&nbsp;手术</td>
                          <td>
                            <input id="opa1" v-model="CPatientDto.OperationHistory" type="radio" name="operation" value="无">
                            <label for="opa1">无</label>
                            <input id="opa2" v-model="CPatientDto.OperationHistory" type="radio" name="operation" value="有">
                            <label for="opa2">有</label>
                          </td>
                        </tr>
                        <tr>
                          <td>&nbsp;外伤</td>
                          <td>
                            <input id="tra1" v-model="CPatientDto.TraumaHistory" type="radio" name="trauma" value="无">
                            <label for="tra1">无</label>
                            <input id="tra2" v-model="CPatientDto.TraumaHistory" type="radio" name="trauma" value="有">
                            <label for="tra2">有</label>
                          </td>
                        </tr>
                        <tr>
                          <td>&nbsp;输血</td>
                          <td>
                            <input id="bli1" v-model="CPatientDto.BloodInHistory" type="radio" name="blood_in" value="无">
                            <label for="bli1">无</label>
                            <input id="bli2" v-model="CPatientDto.BloodInHistory" type="radio" name="blood_in" value="有">
                            <label for="bli2">有</label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>
              <table border="1">
                <tr>
                  <td width="10%">家族史</td>
                  <td width="90%">
                    <table border="1">
                      <tbody>
                        <tr>
                          <td width="10%">父亲</td>
                          <td>
                            <input id="fh1" v-model="CPatientDto.FatherDiseaseHistory" type="checkbox" name="FatherDiseaseHistory" value="无">
                            <label for="fh1">1.无</label>
                            <input id="fh2" v-model="CPatientDto.FatherDiseaseHistory" type="checkbox" name="FatherDiseaseHistory" value="高血压">
                            <label for="fh2">2.高血压</label>
                            <input id="fh3" v-model="CPatientDto.FatherDiseaseHistory" type="checkbox" name="FatherDiseaseHistory" value="糖尿病">
                            <label for="fh3">3.糖尿病</label>
                            <input id="fh4" v-model="CPatientDto.FatherDiseaseHistory" type="checkbox" name="FatherDiseaseHistory" value="冠心病">
                            <label for="fh4">4.冠心病</label>
                            <input id="fh5" v-model="CPatientDto.FatherDiseaseHistory" type="checkbox" name="FatherDiseaseHistory" value="慢性阻塞性肺疾病病">
                            <label for="fh5">5.慢性阻塞性肺疾病</label>
                            <input id="fh6" v-model="CPatientDto.FatherDiseaseHistory" type="checkbox" name="FatherDiseaseHistory" value="恶性肿瘤">
                            <label for="fh6">6.恶性肿瘤</label>
                            <input id="fh7" v-model="CPatientDto.FatherDiseaseHistory" type="checkbox" name="FatherDiseaseHistory" value="脑卒中">
                            <label for="fh7">7.脑卒中</label>
                            <input id="fh8" v-model="CPatientDto.FatherDiseaseHistory" type="checkbox" name="FatherDiseaseHistory" value="严重精神障碍">
                            <label for="fh8">8.严重精神障碍</label>
                            <input id="fh9" v-model="CPatientDto.FatherDiseaseHistory" type="checkbox" name="FatherDiseaseHistory" value="结核病">
                            <label for="fh9">9.结核病</label>
                            <input id="fh10" v-model="CPatientDto.FatherDiseaseHistory" type="checkbox" name="FatherDiseaseHistory" value="肝炎">
                            <label for="fh10">10.肝炎</label>
                            <input id="fh11" v-model="CPatientDto.FatherDiseaseHistory" type="checkbox" name="FatherDiseaseHistory" value="其他法定传染病">
                            <label for="fh11">11.其他法定传染病</label>
                            <input id="fh12" v-model="CPatientDto.FatherDiseaseHistory" type="checkbox" name="FatherDiseaseHistory" value="职业病">
                            <label for="fh12">12.职业病</label>
                            <span>
                              13.其他
                              <input v-model="CPatientDto.FatherOtherDiseaseHistory" type="text">
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td width="10%">母亲</td>
                          <td>
                            <input id="mh1" v-model="CPatientDto.MotherDiseaseHistory" type="checkbox" name="MotherDiseaseHistory" value="无">
                            <label for="mh1">1.无</label>
                            <input id="mh2" v-model="CPatientDto.MotherDiseaseHistory" type="checkbox" name="MotherDiseaseHistory" value="高血压">
                            <label for="mh2">2.高血压</label>
                            <input id="mh3" v-model="CPatientDto.MotherDiseaseHistory" type="checkbox" name="MotherDiseaseHistory" value="糖尿病">
                            <label for="mh3">3.糖尿病</label>
                            <input id="mh4" v-model="CPatientDto.MotherDiseaseHistory" type="checkbox" name="MotherDiseaseHistory" value="冠心病">
                            <label for="mh4">4.冠心病</label>
                            <input id="mh5" v-model="CPatientDto.MotherDiseaseHistory" type="checkbox" name="MotherDiseaseHistory" value="慢性阻塞性肺疾病病">
                            <label for="mh5">5.慢性阻塞性肺疾病</label>
                            <input id="mh6" v-model="CPatientDto.MotherDiseaseHistory" type="checkbox" name="MotherDiseaseHistory" value="恶性肿瘤">
                            <label for="mh6">6.恶性肿瘤</label>
                            <input id="mh7" v-model="CPatientDto.MotherDiseaseHistory" type="checkbox" name="MotherDiseaseHistory" value="脑卒中">
                            <label for="mh7">7.脑卒中</label>
                            <input id="mh8" v-model="CPatientDto.MotherDiseaseHistory" type="checkbox" name="MotherDiseaseHistory" value="严重精神障碍">
                            <label for="mh8">8.严重精神障碍</label>
                            <input id="mh9" v-model="CPatientDto.MotherDiseaseHistory" type="checkbox" name="MotherDiseaseHistory" value="结核病">
                            <label for="mh9">9.结核病</label>
                            <input id="mh10" v-model="CPatientDto.MotherDiseaseHistory" type="checkbox" name="MotherDiseaseHistory" value="肝炎">
                            <label for="mh10">10.肝炎</label>
                            <input id="mh11" v-model="CPatientDto.MotherDiseaseHistory" type="checkbox" name="MotherDiseaseHistory" value="其他法定传染病">
                            <label for="mh11">11.其他法定传染病</label>
                            <input id="mh12" v-model="CPatientDto.MotherDiseaseHistory" type="checkbox" name="MotherDiseaseHistory" value="职业病">
                            <label for="mh12">12.职业病</label>
                            <span>
                              13.其他
                              <input id="mh13" v-model="CPatientDto.MotherOtherDiseaseHistory" type="text" name="disease">
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td width="10%">兄弟姐妹</td>
                          <td>
                            <input id="bh1" v-model="CPatientDto.BrotherDiseaseHistory" type="checkbox" name="BrotherDiseaseHistory" value="无">
                            <label for="bh1">1.无</label>
                            <input id="bh2" v-model="CPatientDto.BrotherDiseaseHistory" type="checkbox" name="BrotherDiseaseHistory" value="高血压">
                            <label for="bh2">2.高血压</label>
                            <input id="bh3" v-model="CPatientDto.BrotherDiseaseHistory" type="checkbox" name="BrotherDiseaseHistory" value="糖尿病">
                            <label for="bh3">3.糖尿病</label>
                            <input id="bh4" v-model="CPatientDto.BrotherDiseaseHistory" type="checkbox" name="BrotherDiseaseHistory" value="冠心病">
                            <label for="bh4">4.冠心病</label>
                            <input id="bh5" v-model="CPatientDto.BrotherDiseaseHistory" type="checkbox" name="BrotherDiseaseHistory" value="慢性阻塞性肺疾病病">
                            <label for="bh5">5.慢性阻塞性肺疾病</label>
                            <input id="bh6" v-model="CPatientDto.BrotherDiseaseHistory" type="checkbox" name="BrotherDiseaseHistory" value="恶性肿瘤">
                            <label for="bh6">6.恶性肿瘤</label>
                            <input id="bh7" v-model="CPatientDto.BrotherDiseaseHistory" type="checkbox" name="BrotherDiseaseHistory" value="脑卒中">
                            <label for="bh7">7.脑卒中</label>
                            <input id="bh8" v-model="CPatientDto.BrotherDiseaseHistory" type="checkbox" name="BrotherDiseaseHistory" value="严重精神障碍">
                            <label for="bh8">8.严重精神障碍</label>
                            <input id="bh9" v-model="CPatientDto.BrotherDiseaseHistory" type="checkbox" name="BrotherDiseaseHistory" value="结核病">
                            <label for="bh9">9.结核病</label>
                            <input id="bh10" v-model="CPatientDto.BrotherDiseaseHistory" type="checkbox" name="BrotherDiseaseHistory" value="肝炎">
                            <label for="bh10">10.肝炎</label>
                            <input id="bh11" v-model="CPatientDto.BrotherDiseaseHistory" type="checkbox" name="BrotherDiseaseHistory" value="其他法定传染病">
                            <label for="bh11">11.其他法定传染病</label>
                            <input id="bh12" v-model="CPatientDto.BrotherDiseaseHistory" type="checkbox" name="BrotherDiseaseHistory" value="职业病">
                            <label for="bh12">12.职业病</label>
                            <span>
                              13.其他
                              <input id="bh13" v-model="CPatientDto.BrotherOtherDiseaseHistory" type="text" name="disease">
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td width="10%">子女</td>
                          <td>
                            <input id="ch1" v-model="CPatientDto.ChildrenDiseaseHistory" type="checkbox" name="ChildrenDiseaseHistory" value="无">
                            <label for="ch1">1.无</label>
                            <input id="ch2" v-model="CPatientDto.ChildrenDiseaseHistory" type="checkbox" name="ChildrenDiseaseHistory" value="高血压">
                            <label for="ch2">2.高血压</label>
                            <input id="ch3" v-model="CPatientDto.ChildrenDiseaseHistory" type="checkbox" name="ChildrenDiseaseHistory" value="糖尿病">
                            <label for="ch3">3.糖尿病</label>
                            <input id="ch4" v-model="CPatientDto.ChildrenDiseaseHistory" type="checkbox" name="ChildrenDiseaseHistory" value="冠心病">
                            <label for="ch4">4.冠心病</label>
                            <input id="ch5" v-model="CPatientDto.ChildrenDiseaseHistory" type="checkbox" name="ChildrenDiseaseHistory" value="慢性阻塞性肺疾病病">
                            <label for="ch5">5.慢性阻塞性肺疾病</label>
                            <input id="ch6" v-model="CPatientDto.ChildrenDiseaseHistory" type="checkbox" name="ChildrenDiseaseHistory" value="恶性肿瘤">
                            <label for="ch6">6.恶性肿瘤</label>
                            <input id="ch7" v-model="CPatientDto.ChildrenDiseaseHistory" type="checkbox" name="ChildrenDiseaseHistory" value="脑卒中">
                            <label for="ch7">7.脑卒中</label>
                            <input id="ch8" v-model="CPatientDto.ChildrenDiseaseHistory" type="checkbox" name="ChildrenDiseaseHistory" value="严重精神障碍">
                            <label for="ch8">8.严重精神障碍</label>
                            <input id="ch9" v-model="CPatientDto.ChildrenDiseaseHistory" type="checkbox" name="ChildrenDiseaseHistory" value="结核病">
                            <label for="ch9">9.结核病</label>
                            <input id="ch10" v-model="CPatientDto.ChildrenDiseaseHistory" type="checkbox" name="ChildrenDiseaseHistory" value="肝炎">
                            <label for="ch10">10.肝炎</label>
                            <input id="ch11" v-model="CPatientDto.ChildrenDiseaseHistory" type="checkbox" name="ChildrenDiseaseHistory" value="其他法定传染病">
                            <label for="ch11">11.其他法定传染病</label>
                            <input id="ch12" v-model="CPatientDto.ChildrenDiseaseHistory" type="checkbox" name="ChildrenDiseaseHistory" value="职业病">
                            <label for="ch12">12.职业病</label>
                            <span>
                              13.其他
                              <input id="ch13" v-model="CPatientDto.ChildrenOtherDiseaseHistory" type="text" name="disease">
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>
            </el-row>
          </el-main>
        </el-container>
        <div slot="footer" class="dialog-footer" style="margin-right: 20px;margin-bottom: 50px;">
          <el-button @click="addResident = false">取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </div>
      </el-dialog>
    </el-header>
    <el-main>
      <el-row>
        <el-col>
          <el-table :data="BasicRecordDataTable" border>
            <el-table-column label="操作" align="center">
              <el-button size="mini" @click="editBasicRecordInfos()">编辑</el-button>
              <el-button size="mini" @click="deleteBasicRecordInfos()">删除</el-button>
            </el-table-column>
            <el-table-column prop="Name" label="姓名" align="center" />
            <el-table-column prop="ID" label="身份证号" align="center" />
            <el-table-column prop="Gender" label="性别" align="center" />
            <el-table-column prop="Age" label="年龄" align="center" />
            <el-table-column prop="PhoneNum" label="联系电话" align="center" />
            <el-table-column prop="DiseaseName" label="确诊疾病" align="center" />
            <el-table-column prop="SignPeople" label="建档人" align="center" />
            <el-table-column prop="SignTime" label="建档时间" align="center" />
            <el-table-column prop="SignLocation" label="建档机构" align="center" />
          </el-table>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'BasicRecord',
  data() {
    return {
      addResident: false,
      BasicRecordDataTable: [],
      SearchInfo: {
        ResidentName: '',
        StartTime: '',
        EndTime: '',
        ContractStatus: '',
        DoctorName: '',
        SignLocation: ''
      },
      CPatientDto: {
        PatientName: '1',
        PatientID: '',
        IDCard: '',
        Gender: '',
        Birthday: '',
        Nationality: '',
        Marriage: '',
        PhoneNumber: '',
        EmergencyContact: '',
        EmergencyPhoneNumber: '',
        EducationLevel: '',
        Profession: '',
        PayWay: '',
        OtherPayWay: '',
        MedicineAllergyHistoryList: [],
        OtherMedicineAllergySource: '',
        FoodAllergyHistoryList: [],
        OtherFoodAllergyHistoryList: '',
        EnvironmentAllergyHistoryList: [],
        OtherEnvironmentAllergyHistoryList: '',
        MixedAllergyHistoryList: '',
        ExposedHistory: [],
        DiseaseHistory: [],
        OtherDiseaseHistory: '',
        TraumaHistory: '',
        BloodInHistory: '',
        FatherDiseaseHistory: [],
        FatherOtherDiseaseHistory: '',
        MotherDiseaseHistory: [],
        MotherOtherDiseaseHistory: '',
        BrotherDiseaseHistory: [],
        BrotherOtherDiseaseHistory: '',
        ChildrenDiseaseHistory: [],
        ChildrenOtherDiseaseHistory: ''
      }
    }
  },
  created() {
  },
  methods: {
    onSearch: function() {},
    saveInfo: function() {}
  }

}
</script>
<style>
  .customWidth{
    width: 80%;
  }
</style>
