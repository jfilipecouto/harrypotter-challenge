import React, { ReactElement } from "react";
import { Avatar, Flex, Segmented } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isCharacterRoute = location.pathname.startsWith("/character/");

  return (
    <Flex gap="small" align="center" vertical>
      {children}
      {!isCharacterRoute && (
        <Segmented
          onChange={(value) => navigate(value)}
          options={[
            {
              label: (
                <div style={{ padding: 4 }}>
                  <Avatar
                    size={34}
                    src="https://www.icon0.com/free/static2/preview2/stock-photo-latin-man-avatar-people-icon-character-cartoon-32934.jpg"
                  ></Avatar>
                  <div>Characters</div>
                </div>
              ),
              value: "/",
            },
            {
              label: (
                <div style={{ padding: 4 }}>
                  <Avatar
                    size={34}
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/student-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--people-person-school-education-2-pack-icons-9928734.png?f=webp"
                  />
                  <div>Students</div>
                </div>
              ),
              value: "/students",
            },
            {
              label: (
                <div style={{ padding: 4 }}>
                  <Avatar
                    size={34}
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/employee-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--business-businessman-pack-professionals-icons-8264146.png?f=webp"
                  />
                  <div>Employees</div>
                </div>
              ),
              value: "/staff",
            },
          ]}
        />
      )}
    </Flex>
  );
};

export default Layout;
